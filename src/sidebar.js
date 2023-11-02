import React from "react";
import { Banner } from "./components/Banner";
import Social from "./com/social";

export const Sidebar = () => {
  return (
    // <!-- Header -->
    <header id="header">
      <div class="inner">
        <Banner />
      </div>{" "}
      <footer>
        <Social />
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </footer>
    </header>
  );
};
