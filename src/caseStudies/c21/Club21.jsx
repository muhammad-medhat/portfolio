import { Link } from "react-router-dom";
import "./c21.css";
import ButtonLink from "../buttonLink";

export default function Club21() {
  return (
    <article className="case-study club21-case-study">
      <ButtonLink />
      <h1 className="mt-3">Club21 Café Digital QR Menu</h1>
      <p>
        A bilingual digital menu guests can open on their phones by scanning a
        QR code at the table.
      </p>

      <h2>The goal</h2>
      <p>
        Give guests a quick way to browse food and drinks, check prices, and
        switch between Arabic and English.
      </p>

      <h2>What I built</h2>
      <p>
        I built a mobile-first menu with category browsing, item descriptions,
        and prices. The layout switches between right-to-left Arabic and
        left-to-right English.
      </p>
      <div className="club21-screenshots">
        <figure>
          <div className="club21-phone">
            <img
              src={`${import.meta.env.BASE_URL}/img/case-study/c21-en.jpg`}
              alt="Club21 menu in English with drink names and prices"
              width="390"
              height="844"
              loading="lazy"
            />
          </div>
          <figcaption>English menu</figcaption>
        </figure>

        <figure>
          <div className="club21-phone">
            <img
              src={`${import.meta.env.BASE_URL}/img/case-study/c21-ar.jpg`}
              alt="Club21 menu in Arabic with a right-to-left layout"
              width="390"
              height="844"
              loading="lazy"
            />
          </div>
          <figcaption>Arabic menu</figcaption>
        </figure>
      </div>

      <h2>How the menu is managed</h2>
      <p>
        I built a custom WordPress plugin to manage menu content. The guest menu
        is published as a static site on GitHub Pages.
      </p>

      <a
        className="button"
        target="_blannk"
        href="https://club21-cafe.github.io/scan/">
        View Live Menu
      </a>
    </article>
  );
}
