import React from "react";
import { Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard/index.js";
import projects from "../projectsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ProjectsList = ({ scrollTop }) => {
  const wp = projects.filter((p) => p.cat === 1);
  const js = projects.filter((p) => p.cat === 2);
  const ud = projects.filter((p) => p.cat === 3);
  console.log("wp", wp);

  return (
    <div id="projects">
      <h3>Projects List</h3>
      <Row>
        {wp.map((p, i) => (
          <>
            <ProjectCard project={p} key={`${i}--${p.title}`} />
          </>
        ))}
        <div className="d-flex align-items-center justify-content-center move-top">
          <p onClick={scrollTop}>
            Top <FontAwesomeIcon icon={faArrowUp} />
          </p>
        </div>
      </Row>
    </div>
  );
};
