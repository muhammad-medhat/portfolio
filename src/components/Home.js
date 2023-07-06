import React from "react";
import { NavBar } from "../com/Navbar/NavBar";
import { Banner } from "./Banner";
import { ContactInfo } from "./ContactInfo";
import { Projects } from "./pages/projects/Projects";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { PortfolioItems } from "../com/PortfolioItems";

function Home() {
  return (
    <div className="App color-overlay">
      <Banner />
      {/* <Skills /> */}
      {/* <ContactInfo /> */}
      <PortfolioItems />
    </div>
  );
}

export default Home;
