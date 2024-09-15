import React from "react";
import { Row } from "react-bootstrap";
import { ProjectCard } from "../com/ProjectCard/index.js";
import projects from "../projectsData.js";

export const ProjectsList = () => {
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
      </Row>
    </div>
  );
};
