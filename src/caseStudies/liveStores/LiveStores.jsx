import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ButtonLink from "../buttonLink";
import "./ls.css";

export default function Livestores() {
  const catalogImage = `${import.meta.env.BASE_URL}/img/case-study/livestores.jpg`;

  return (
    <article className="livestores-case-study">
      <Helmet>
        <title>Livestores Electronics | Muhammad Medhat</title>
        <meta
          name="description"
          content="WooCommerce store cleanup and optimization for Livestores Electronics, including WoodMart child theme changes and product filter plugin installation."
        />
      </Helmet>
      <ButtonLink />

      <header className="mb-4">
        <h1>Livestores Electronics</h1>
        <p className="lead">WooCommerce Store Cleanup and Optimization</p>
      </header>
      <section className="mb-4" aria-labelledby="livestores-overview">
        <h2 id="livestores-overview">Project Overview</h2>
        <p>
          Livestores Electronics is an online store for digital gadget
          accessories. I worked on an existing WooCommerce installation that had
          accumulated a large number of plugins and files on the server. My work
          focused on cleanup, optimization, and storefront updates.
        </p>
      </section>
      <section className="mb-4" aria-labelledby="livestores-contribution">
        <h2 id="livestores-contribution">My Contribution</h2>
        <ul>
          <li>
            <strong>Site cleanup and optimization.</strong> I cleaned up files
            on the server as part of optimizing the existing store.
          </li>
          <li>
            <strong>Storefront changes.</strong> I used a WoodMart child theme
            to make changes to the storefront.
          </li>
          <li>
            <strong>Product filtering.</strong> I installed a product filtering
            plugin so shoppers could narrow the catalog.
          </li>
        </ul>
      </section>
      <section className="mb-4" aria-labelledby="livestores-storefront">
        <h2 id="livestores-storefront">Storefront Preview</h2>
        <figure className="mb-0 phone">
          <img
            src={catalogImage}
            className="img-fluid rounded"
            alt="Livestores Electronics catalog showing digital gadget accessories"
            loading="lazy"
          />
          <figcaption className="mt-2">
            Livestores Electronics WooCommerce catalog.
          </figcaption>
        </figure>
      </section>
      <a
        className="button"
        href="https://livestores.co"
        target="_blank"
        rel="noopener noreferrer">
        Visit Livestores
      </a>
      <section
        className="case-study-contact"
        aria-labelledby="livestores-contact">
        <div>
          <h2 id="livestores-contact">
            Need help with your WooCommerce store?
          </h2>
          <p>
            Tell me what you’d like to improve, from site cleanup to storefront
            updates.
          </p>
        </div>

        <Link to="/contact" className="button">
          Discuss Your Store
        </Link>
      </section>
    </article>
  );
}
