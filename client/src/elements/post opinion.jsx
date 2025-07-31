import React, { useState } from "react";

export default function Uploud_page() {
  const [city, setCity] = useState("latakia"); // Set default value
  const [opinion, setOpinion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!opinion.trim()) {
      setMessage({ text: "Please enter an opinion", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://syria-opinions.onrender.com/insert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            opinion: opinion.trim(),
            city,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setMessage({
          text: "Opinion submitted successfully!",
          type: "success",
        });
        setOpinion(""); // Clear form
      } else {
        throw new Error(result.error || "Failed to submit opinion");
      }
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Share Your Opinion</h1>

        {message && (
          <div
            style={{
              ...styles.message,
              backgroundColor: message.type === "error" ? "#ffebee" : "#e8f5e9",
              color: message.type === "error" ? "#c62828" : "#2e7d32",
            }}
          >
            {message.text}
          </div>
        )}

        <div style={styles.formGroup}>
          <label style={styles.label}>Your Opinion</label>
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            style={styles.textarea}
            placeholder="What's on your mind?"
            rows="4"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.select}
          >
            <option value="damascus">Damascus</option>
            <option value="aleppo">Aleppo</option>
            <option value="homs">Homs</option>
            <option value="hama">Hama</option>
            <option value="latakia">Latakia</option>
            <option value="deir-ez-zor">Deir ez-Zor</option>
            <option value="raqqa">Raqqa</option>
            <option value="hasakah">Hasakah</option>
            <option value="tartous">Tartous</option>
            <option value="idlib">Idlib</option>
            <option value="daraa">Daraa</option>
            <option value="as-sweida">As-Sweida</option>
            <option value="quneitra">Quneitra</option>
            <option value="al-hasakah">Al-Hasakah</option>
            <option value="al-raqqa">Al-Raqqa</option>
            <option value="al-qamishli">Al-Qamishli</option>
            <option value="manbij">Manbij</option>
            <option value="abu-kamal">Abu Kamal</option>
            <option value="al-mayadin">Al-Mayadin</option>
            <option value="al-bukamal">Al-Bukamal</option>
            <option value="al-haffah">Al-Haffah</option>
            <option value="jableh">Jableh</option>
            <option value="safita">Safita</option>
            <option value="baniyas">Baniyas</option>
            <option value="masyaf">Masyaf</option>
            <option value="salamiyah">Salamiyah</option>
            <option value="tadmur">Tadmur (Palmyra)</option>
            <option value="duma">Duma</option>
            <option value="darayya">Darayya</option>
            <option value="maarat-al-numan">Maarat al-Numan</option>
            <option value="ariha">Ariha</option>
            <option value="jisr-al-shughur">Jisr al-Shughur</option>
          </select>
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Opinion"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "600",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#555",
    fontSize: "14px",
    fontWeight: "500",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    resize: "vertical",
    minHeight: "100px",
    boxSizing: "border-box",
    transition: "border 0.3s",
    "&:focus": {
      outline: "none",
      borderColor: "#4a90e2",
      boxShadow: "0 0 0 2px rgba(74, 144, 226, 0.2)",
    },
  },
  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "border 0.3s",
    "&:focus": {
      outline: "none",
      borderColor: "#4a90e2",
      boxShadow: "0 0 0 2px rgba(74, 144, 226, 0.2)",
    },
  },
  submitButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#357abd",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
  },
  message: {
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "14px",
  },
};
