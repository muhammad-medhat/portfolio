import React from "react";
import logo from "../../assets/md/logo-img.svg";
import "./style.css";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section className="hero">
      <h1>Senior WordPress Developer</h1>

      <p className="hero-subtitle">
        I build fast, scalable WordPress and WooCommerce solutions focused on
        performance, SEO, and long-term maintainability.
      </p>

      {/* <ul className="actions" style={{ float: "right" }}> */}
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
  );
};
