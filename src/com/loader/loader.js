import React from "react";
import "./loader.css";

export default function Loader({ isInner = false }) {
  return (
    <div className={`loader-wrapper ${isInner ? "inner-loader" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}
