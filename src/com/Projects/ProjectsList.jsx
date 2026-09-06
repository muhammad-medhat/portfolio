import React, { useState } from "react";
// import { ProjectCard } from "../ProjectCard/index.js";
import projects from "../../projectsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faChain,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./projects.css";
//yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import ScrollTop from "../ScrollTop.jsx";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
// import { handleNavigation } from "../../helper.js";
import { useCustomNavigate } from "../../hooks/useCustomNavigation.js";
("../../hooks/useCustomNavigation.js");

function ProjectsList() {
  const [layout, setLayout] = useState("columns");
  // -1 means closed; 0..n is open index
  const [openIndex, setOpenIndex] = useState(-1);

  const wp = projects.filter((p) => p.cat === 1);
  const ac = projects.filter((p) => p.cat !== 1);

  // console.log("p", wp);
  // console.log(import.meta.env.BASE_URL);

  const slides = wp.map((p) => ({
    src: import.meta.env.BASE_URL + "/" + p.image,
    title: p.title,
    description: p.longDesc,
    url: p.url,
  }));
  const navigate = useNavigate();
  const handleNavigation = useCustomNavigate();

  return (
    <div className="my-gallery">
      {/* Simple grid to show thumbnails */}
      {/* <LightboxLayout layout={layout} setLayout={setLayout} /> */}
      <div className={`${layout}-grid`}>
        {wp.map((p, i) => (
          <div
            key={p.slug}
            className="thumb-wrapper"
            onClick={() => setOpenIndex(i)}>
            <img
              src={import.meta.env.BASE_URL + "/" + p.image}
              alt={p.title}
              className="gallery-thumb"
            />
            {/* <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" /> */}

            <div className="glass-hover capitalize flex">
              {p.title}
              {p.url ? (
                <span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn">
                    <FontAwesomeIcon icon={faChain} />
                  </a>
                </span>
              ) : (
                <span className="visit-btn out">Outdated Project</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <ScrollTop />
      <Lightbox
        open={openIndex >= 0}
        index={openIndex >= 0 ? openIndex : 0}
        close={() => setOpenIndex(-1)}
        slides={slides}
        on={{
          view: ({ index }) => {
            const parsedIndex = parseInt(index);
            if (!isNaN(parsedIndex)) setOpenIndex(parsedIndex);
          },
        }}
        controller={{
          closeOnBackdropClick: true, // This enables closing on backdrop click
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, .6)",
          },
        }}
        captions={{
          descriptionTextAlign: "center",
          titleTextAlign: "center",
        }}
        plugins={[Captions]}
        // render={{
        //   toolbar: addToolbarButton(this.toolbar, "xxxx", ({ index }) => {
        //     <button onClick={() => visitWebsite(slides[index].url)}>
        //       Visit Website&nbsp;
        //       <FontAwesomeIcon icon={faChain} />
        //     </button>;
        //   }),
        //   slideFooter: ({ slide }) => (
        //     <div style={{ textAlign: "center", marginTop: "10px" }}>
        //       {slide.url ? (
        //         <a
        //           href={slide.url}
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           className="visit-btn">
        //           Visit Website&nbsp;
        //           <FontAwesomeIcon icon={faChain} />
        //         </a>
        //       ) : (
        //         <p className="visit-btn">Outdated Project</p>
        //       )}
        //     </div>
        //   ),
        // }}
      />
      <ul className="actions">
        <li>
          {/* <Link to="/p" className="button" style={{ textAlign: "center" }}> */}
          <Link
            onClick={handleNavigation("/p")}
            className="button"
            style={{ textAlign: "center" }}>
            Show More...
            <FontAwesomeIcon icon={<faArrowLeft />} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default ProjectsList;
