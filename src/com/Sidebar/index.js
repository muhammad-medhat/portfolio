import React from "react";
import { Banner } from "../Banner";
import Social from "../social";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // <!-- Header -->
    <>
      <div class="inner flex flex-column justify-center align-center">
        <Banner handleNavigation={handleNavigation} />
      </div>
      <ul id="menu">
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/about")}>
          <Link to="/about">about</Link>
        </li>
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/tools")}>
          <Link to="/tools">my tools</Link>
        </li>
        {/* <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/tools")}>
          <Link to="/tools">articles</Link>
        </li> */}
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/contact")}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <footer className="flex flex-column justify-center align-center my-4">
        <Social iconsToShow={["gh", "ln", "yt", "fb", "tw"]} />
        <p>
          Copyright&copy; 2023 - {new Date().getFullYear()}. All Rights Reserved
        </p>
      </footer>
    </>
  );
};
