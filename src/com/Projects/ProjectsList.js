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
  const [open, setOpen] = useState(false);
  const [layout, setLayout] = useState("columns");

  const wp = projects.filter((p) => p.cat === 1);
  // const js = projects.filter((p) => p.cat === 2);
  // const ud = projects.filter((p) => p.cat === 3);
  // console.log("wp", wp);

  const slides = wp.map((p) => ({
    src: p.image,
    title: p.title,
    description: p.longDesc,
    url: p.url,
  }));
  // console.log(slides);

  return (
    <div className="my-gallery">
      {/* Simple grid to show thumbnails */}
      {/* <LightboxLayout layout={layout} setLayout={setLayout} /> */}
      <div className={`${layout}-grid`}>
        {wp.map((p, i) => (
          <div
            key={p.slug}
            className="thumb-wrapper"
            onClick={() => setOpen(i)}>
            <img src={p.image} alt={p.title} className="gallery-thumb" />
            <div className="glass-hover capitalize">{p.title}</div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center move-top">
        <p onClick={scrollTop}>
          Top <FontAwesomeIcon icon={faArrowUp} />
        </p>
      </div>

      <Lightbox
        open={open !== false}
        index={open === false ? 0 : open} // ⭐ Fix: Pass current index
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Captions]}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, .6)",
          },
        }}
        captions={{
          descriptionTextAlign: "center",
          titleTextAlign: "center",
        }}
        render={{
          slideFooter: ({ slide }) => (
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              {slide.url ? (
                <a
                  href={slide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn">
                  Visit Website&nbsp;
                  <FontAwesomeIcon icon={faChain} />
                </a>
              ) : (
                <p className="visit-btn">Outdated Project</p>
              )}
            </div>
          ),
        }}
      />
    </div>
  );
}
export default ProjectsList;
