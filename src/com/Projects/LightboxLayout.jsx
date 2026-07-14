import React, { useState } from "react";

function LightboxLayout({ layout, setLayout }) {
  const layoutList = ["gallery", "masonry", "columns"];
  return (
    <div>
      Layout
      {layoutList.map((l) => (
        <span
          key={l}
          className={`btn ${layout === l ? "active" : ""}`}
          onClick={() => setLayout(l)}
          style={{
            marginRight: "10px",
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: "6px",
            background: layout === l ? "#444" : "#ddd",
            color: layout === l ? "white" : "black",
          }}>
          {l}
        </span>
      ))}
    </div>
  );
}

export default LightboxLayout;
