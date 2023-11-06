import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <article className="col-6 col-12-xsmall work-item">
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
