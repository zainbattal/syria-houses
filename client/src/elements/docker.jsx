import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
export default function Docker() {
  return (
    <div className="up-docker">
      <h3 style={{ fontSize: "30px" }}>syrian opinions</h3>
      <Link
        className="link"
        to={"/"}
        style={{
          /* ONLY color changes below */

          textDecoration: "none",
          /* Preserve all original layout: */

          display: "inline",
          ":hover": {
            color: "#2b6cb0" /* Blue */,
          },
        }}
      >
        home
      </Link>
      <Link
        className="link"
        to={"/AddOpinion"}
        style={{
          /* ONLY color changes below */

          textDecoration: "none",
          /* Preserve all original layout: */

          display: "inline",
          ":hover": {
            color: "#2b6cb0" /* Blue */,
          },
        }}
      >
        Uploud opinion
      </Link>
    </div>
  );
}
