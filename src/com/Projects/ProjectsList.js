import React, { useState } from "react";
// import { ProjectCard } from "../ProjectCard/index.js";
import projects from "../../projectsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChain } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
function ProjectsList({ scrollTop }) {
  const [layout, setLayout] = useState("columns");
  // -1 means closed; 0..n is open index
  const [openIndex, setOpenIndex] = useState(-1);

  const wp = projects.filter((p) => p.cat === 1);

  const slides = wp.map((p) => ({
    src: p.image,
    title: p.title,
    description: p.longDesc,
    url: p.url,
  }));
  const visitWebsite = (url) => {
    // debugger;
    console.log("url", url);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
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
            <img src={p.image} alt={p.title} className="gallery-thumb" />
            <div className="glass-hover capitalize flex">
              {p.title}
              {p.url ? (
                <span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      visitWebsite(p.url);
                    }}>
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
      <div className="d-flex align-items-center justify-content-center move-top">
        <p onClick={scrollTop}>
          Top <FontAwesomeIcon icon={faArrowUp} />
        </p>
      </div>

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
    </div>
  );
}
export default ProjectsList;
