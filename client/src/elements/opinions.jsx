import React, { useState, useEffect } from "react";

function OpinionsList() {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    fetch("https://syria-opinions.onrender.com")
      .then((res) => res.json())
      .then((data) => setOpinions(data));
  }, []);

  return (
    <div style={styles.container}>
      {opinions.map((opinion) => (
        <div key={opinion.id} style={styles.card}>
          <div style={styles.content}>
            <p style={styles.opinion}>"{opinion.opinion}"</p>
            <div style={styles.meta}>
              <span style={styles.city}>{opinion.city}</span>
              <span style={styles.date}>
                {new Date(opinion.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginBottom: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
  },
  content: {
    flex: 1,
  },
  opinion: {
    fontSize: "16px",
    margin: "0 0 8px 0",
    wordBreak: "break-word",
  },
  meta: {
    display: "flex",
    gap: "16px",
    color: "#666",
    fontSize: "14px",
  },
  city: {},
  date: {},
};

export default OpinionsList;
