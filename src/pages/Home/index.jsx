import React, { useEffect } from "react";
import { Hero } from "../../com/hero/Hero";
import ProjectsList from "../../com/Projects/ProjectsList";
import GetinTouch from "../../com/footer/GetInTouch";
import { Helmet } from "react-helmet-async";
import ScrollTop from "../../com/ScrollTop";

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
      <Hero />
      <ProjectsList />
      <GetinTouch />
    </div>
  );
}

export default Home;
