import React, { useEffect, useRef } from "react";

import { Helmet } from "react-helmet-async";
import InnerHeader from "../../com/inner-header/InnerHeader";

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
<InnerHeader title="About" icon="address-card"/>
              <section className="seo-intro" aria-label="About Muhammad Medhat">
                <h1>Muhammad Medhat – Senior WordPress Developer</h1>

                <p>
                  I build fast, SEO-friendly WordPress websites and WooCommerce
                  stores. I specialize in custom themes and plugins,
                  Gutenberg/Elementor builds, performance optimization (Core Web
                  Vitals), and technical SEO.
                </p>

                <p className="mt-3 border1">
                  I work remotely from Egypt with clients worldwide, focusing on
                  clean code, scalable architecture, and reliable delivery.
                </p>
                <ul className="mt-3 blockquote">
                  <li>Custom WordPress themes & plugins</li>
                  <li>WooCommerce customization</li>
                  <li>Speed optimization & Core Web Vitals</li>
                  <li>On-page technical SEO</li>
                </ul>
              </section>
    </>
  );
}
