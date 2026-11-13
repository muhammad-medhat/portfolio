import React from "react";
import { Link } from "react-router-dom";

function ButtonLink() {
  return (
    <Link to="/p" className="button">
      ← All Projects
    </Link>
  );
}

export default ButtonLink;
