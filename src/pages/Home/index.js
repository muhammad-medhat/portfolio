import React, { useEffect } from "react";
// import { Banner } from "../../../com/Banner";

import { Brief } from "../../com/Brief/brief";
import ProjectsList from "../../com/Projects/ProjectsList";
import GetinTouch from "../../com/footer/GetInTouch";
import { Helmet } from "react-helmet-async";

function Home({ scrollTop }) {
  useEffect(() => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="App color-overlay">
      <Helmet>
        <title>
          Muhammad Medhat – Senior WordPress Developer and Technical Writer
        </title>
        <meta
          name="description"
          content="Senior WordPress Developer with 15+ years experience. Custom themes, plugins, WooCommerce, and performance optimization."
        />
      </Helmet>
      <Brief />
      <ProjectsList scrollTop={scrollTop} />
      <GetinTouch />
    </div>
  );
}

export default Home;
