import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { ContactInfo } from "./ContactInfo";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

function Home() {
  return (
    <div className="App color-overlay">
      <Banner />
      {/* <Skills /> */}
      <ContactInfo />
      <Projects />
    </div>
  );
}

export default Home;
