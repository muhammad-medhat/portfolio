import React from "react";
import logo from "../../assets/md/logo-img.svg";
import "./style.css";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section id="hero">
      <header className="major capitalize flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          style={
            {
              // maxWidth: "10rem",
            }
          }
        />
        <h1>Muhammad Medhat, WordPress Developer</h1>
      </header>

      <p className="text-start">
        I build WordPress websites, WooCommerce stores, and custom plugins for
        businesses. I also customize existing sites when you need a new feature
        or a better shopping experience.
      </p>

      <ul className="actions">
        <li>
          <Link to="/p" className="button">
            View My Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="button">
            Contact Me
          </Link>
        </li>
      </ul>
    </section>
  );
};
