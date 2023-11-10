import React from "react";
import { Banner } from "../Banner";
import Social from "../social";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    // <!-- Header -->
    <>
      <header id="header" className="flex flex-column justify-content-between">
        <div class="inner flex flex flex-column justify-center align-center">
          <Banner />
        </div>
        <ul id="menu">
          <li className="btn btn-sm uppercase">
            <Link to="/">home</Link>
          </li>
          {/* <li className="btn btn-sm uppercase">
            <Link to="/about">about</Link>
          </li> */}
          <li className="btn btn-sm uppercase">
            <Link to="/tools">my tools</Link>
          </li>
          <li className="btn btn-sm uppercase">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <footer className="flex flex-column justify-center align-center my-4">
          <Social />
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </footer>
      </header>
    </>
  );
};
