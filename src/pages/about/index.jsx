import React, { useEffect, useRef } from "react";

import { Helmet } from "react-helmet-async";
import InnerHeader from "../../com/inner-header/InnerHeader";
import Hero from "./hero";
import "./about.css";
import Facts from "./Facts";
import MyJourney from "./myJourney";
import AreasOfExpertise from "./areasOfExpertise";
import Expectations from "./expectations";
import TechStack from "./techStack";
import Beyond from "./byond";
import GetinTouch from "../../com/footer/GetInTouch";
export default function About() {
  return (
    <>
      <Helmet>
        <title>
          Muhammad Medhat – Senior WordPress Developer and Technical Writer
        </title>
        <meta
          name="description"
          content="Senior WordPress Developer with 15+ years experience. Custom themes, plugins, WooCommerce, and performance optimization."
        />
      </Helmet>
      {/* <InnerHeader title="About" icon="address-card" /> */}
      <section className="seo-intro" aria-label="About Muhammad Medhat">
        <Hero />
        <MyJourney />
        <Facts />
        <AreasOfExpertise />
        <Expectations />
        <TechStack />
        <Beyond />
        <GetinTouch label="Contact me" />
      </section>
    </>
  );
}
