import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ handleNavigation }) => {
  return (
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
        onClick={() => handleNavigation("/youtube")}>
        <Link to="/youtube">
          <i className="fa-brands fa-youtube"></i>youtube
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
  );
};

export default NavMenu;
