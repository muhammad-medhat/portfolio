import React from "react";
import "./style.css";
export const ProjectCard = ({ project }) => {
  return (
    <article className="col-md-6 col-sm-12 work-item">
      <a href={`./${project.image}`} className="image fit thumb">
        <div className="overlay">&nbsp;</div>
        <img
          src={`./${project.image}`}
          alt={project.title}
          title={project.desc}
          style={{
            maxWidth: "740px",
            maxHeight: "434px",
            objectFit: "contain",
          }}
        />
      </a>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </article>
  );
};
