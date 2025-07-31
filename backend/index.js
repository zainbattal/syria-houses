const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

const corsOptions = {
  origin: [
    "https://syria-opinions.vercel.app", // Your Vercel frontend
    "http://localhost:3000", // For local development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  try {
    const list = await pool.query("SELECT * FROM opinions ORDER BY date DESC");
    res.json(list.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/insert", async (req, res) => {
  try {
    const { opinion, city } = req.body;

    if (!opinion || !city) {
      return res.status(400).json({ error: "Opinion and city are required" });
    }

    const newOpinion = await pool.query(
      "INSERT INTO opinions (opinion, city) VALUES ($1, $2) RETURNING *",
      [opinion, city]
    );

    res.status(201).json(newOpinion.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

app.post("/opinions/:id/like", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "UPDATE opinions SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/opinions/:id/dislike", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "UPDATE opinions SET dislikes = dislikes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/", async (req, res) => {
  try {
    const response = await pool.query("DELETE FROM opinions");
  } catch (error) {
    console.log(error);
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
