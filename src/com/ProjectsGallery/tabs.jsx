import React from "react";
import { Nav } from "react-bootstrap";

function Tabs({ showTab }) {
  return (
    <>
      <div className="subtitle">Browse projects by your interest</div>
      <Nav className="nav nav-pills nav-justified">
        <a
          key="cat-all"
          className="nav-item nav-link active"
          data-cat="all"
          href="#"
          onClick={showTab}>
          All Projects
        </a>
        <a
          key="cat-wp"
          className="nav-item nav-link"
          data-cat="wp"
          href="#"
          onClick={showTab}>
          WordPress
        </a>
        <a
          key="cat-js"
          className="nav-item nav-link"
          data-cat="js"
          href="#"
          onClick={showTab}>
          Beginners
        </a>
        <a
          key="cat-ud"
          className="nav-item nav-link"
          data-cat="ud"
          href="#"
          onClick={showTab}>
          Academic
        </a>
      </Nav>
    </>
  );
}

export default Tabs;
