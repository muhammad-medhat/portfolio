import { Link } from "react-router-dom";
import "./c21.css";
import ButtonLink from "../buttonLink";

export default function Club21() {
  return (
    <>
      <style>
        <style>{`
  article > .case-study-contact {
    display: grid;
    gap: 1rem;
    margin-block-start: 2.5rem;
    padding: clamp(1.25rem, 4vw, 2rem);
    border: 1px solid var(--bs-border-color, #dee2e6);
    border-radius: 1rem;
    background: var(--bs-tertiary-bg, #f8f9fa);
    color: var(--bs-body-color, #212529);
  }

  article > .case-study-contact h2 {
    margin: 0 0 0.5rem;
    color: inherit;
    font-size: clamp(1.2rem, 1rem + 0.75vw, 1.6rem);
    line-height: 1.25;
  }

  article > .case-study-contact p {
    margin: 0;
    line-height: 1.6;
  }

  article > .case-study-contact > .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    height: auto;
    padding: 0.625rem 1.25rem;
    line-height: 1.4;
    text-align: center;
    white-space: normal;
  }

  article > .case-study-contact > .button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  @media (min-width: 768px) {
    article > .case-study-contact {
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
    }
  }
`}</style>
      </style>
      <article className="case-study club21-case-study">
        <ButtonLink />
        {/* <section className="case-study-contact"></section> */}
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
        <section className="case-study-contact">
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
        </section>
        <section className="case-study-contact">
          <h2>How the menu is managed</h2>
          <p>
            I built a custom WordPress plugin to manage menu content. The guest
            menu is published as a static site on GitHub Pages.
          </p>
        </section>

        <section className="case-study-contact">
          <a
            className="button"
            target="_blannk"
            href="https://club21-cafe.github.io/scan/">
            View Live Menu
          </a>
        </section>
        <section
          className="case-study-contact mt-4"
          aria-labelledby="club21-contact">
          <div>
            <h2 id="club21-contact">Need a digital menu for your café?</h2>
            <p>
              Give guests a mobile-friendly menu they can open by scanning a QR
              code.
            </p>
          </div>

          <Link to="/contact" className="button">
            Discuss Your Menu
          </Link>
        </section>
      </article>
    </>
  );
}
