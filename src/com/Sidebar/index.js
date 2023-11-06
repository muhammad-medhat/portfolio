import React from "react";
import { Banner } from "../Banner";
import Social from "../social";

export const Sidebar = () => {
  return (
    // <!-- Header -->
    <>
      <header id="header">
        <div class="inner flex">
          <Banner />{" "}
          <ul>
            <li className="btn btn-sm uppercase">home</li>
            <li className="btn btn-sm uppercase">about</li>
            <li className="btn btn-sm uppercase">contact</li>
          </ul>
        </div>

        <footer>
          <Social />
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </footer>
      </header>
    </>
  );
};
