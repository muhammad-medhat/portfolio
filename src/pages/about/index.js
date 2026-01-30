import React, { useEffect, useRef } from "react";
// import HireMe from "../../com/HireMe/HireMe";
import "./about.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  const widgetRef = useRef(null);
  useEffect(() => {
    if (!widgetRef.current) return;
    if (document.getElementById("pph-widget-script")) return;
    const script = document.createElement("script");
    script.id = "pph-widget-script";
    script.type = "text/javascript";
    const useSSL = window.location.protocol === "https:";
    script.src =
      (useSSL ? "https:" : "http:") +
      "//www.peopleperhour.com/hire/3143609927/55859.js" +
      "?width=245&height=320&orientation=vertical&theme=dark" +
      "&hourlies=1076023%2C1078188&rnd=" +
      Math.floor(Math.random() * 10000);

    // 🔑 Insert script AFTER the div (this is what PPH expects)
    widgetRef.current.after(script);
    debugger;

    return () => {
      // cleanup
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
      script.remove();
    };
  }, []);

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
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <div className="d-flex">
            <div>
              <h3 className="inner-title">
                <i className="fa-regular fa-address-card"></i>About Me
              </h3>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
