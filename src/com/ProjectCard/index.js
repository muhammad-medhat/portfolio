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
      <h3 style={{ display: "flex", justifyContent: "space-between" }}>
        <b>{project.title}</b>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5em",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Project
          </a>
        ) : (
          "...outdated"
        )}
      </h3>
      <p>{project.desc}</p>
    </article>
  );
};
