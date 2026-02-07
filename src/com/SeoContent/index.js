import React from "react";
import "./hero.scss";
import ScrollTop from "../ScrollTop";

function SeoContent({ scrollTop }) {
  return (
    <section className="seo-content" aria-label="About Muhammad Medhat">
      <h1>Muhammad Medhat – Senior WordPress Developer</h1>

      <p>
        I am a Senior WordPress Developer with over 15 years of experience
        building fast, secure, and scalable websites. I specialize in custom
        WordPress themes, plugin development, and WooCommerce solutions tailored
        to real business needs.
      </p>

      <p>
        My work focuses on clean architecture, performance optimization, and
        SEO-friendly development. I help businesses improve Core Web Vitals,
        enhance user experience, and convert visitors into customers through
        well-structured, maintainable code.
      </p>

      <h2>What I Do</h2>
      <ul>
        <li>Custom WordPress themes and plugins</li>
        <li>WooCommerce customization and integrations</li>
        <li>Website speed optimization and Core Web Vitals</li>
        <li>Technical SEO and on-page optimization</li>
        <li>Gutenberg and Elementor development</li>
      </ul>

      <p>
        I work remotely with clients worldwide, delivering reliable solutions
        with clear communication, realistic timelines, and long-term
        maintainability.
      </p>
      <ScrollTop />
    </section>
  );
}

export default SeoContent;
