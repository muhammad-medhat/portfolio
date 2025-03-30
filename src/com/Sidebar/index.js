import React from "react";
import { Banner } from "../Banner";
import Social from "../social";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";

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
      <div className="inner flex flex-column justify-center align-center">
        <Banner handleNavigation={handleNavigation} />
      </div>
      <ul id="menu">
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/about")}>
          <Link to="/about">
            <i className="fa-regular fa-address-card"></i>about
          </Link>
        </li>
        {/* <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/tools")}>
          <Link to="/tools">
            <i className="fa-solid fa-screwdriver-wrench"></i>tools
          </Link>
        </li> */}
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/rss")}>
          <Link to="/rss">
            <i className="fa-brands fa-readme"></i>articles
          </Link>
        </li>
        <li
          className="btn btn-sm uppercase"
          onClick={() => handleNavigation("/contact")}>
          <Link to="/contact">
            <i className="fa-regular fa-address-book"></i>contact
          </Link>
        </li>
      </ul>
      <footer className="flex flex-column justify-center align-center my-4">
        <Social iconsToShow={["gh", "ln", "dt", "yt"]} />
        <p>
          Copyright &copy; 2023 - {new Date().getFullYear()}. All Rights
          Reserved
        </p>
      </footer>
    </>
  );
};
