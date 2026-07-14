import React from "react";

function Elharefa({ showTestimonial }) {
  return (
    <div className="elharefa-cont">
      <h2>Hire me on Elharefa</h2>

      <p className="desc">
        Hire me for a complete project with clear scope, milestones, and secure
        payments through ElHarefa.
      </p>
      <a
        href="https://www.elharefa.com/en/freelancers/p/muhammad.medhat"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary">
        Visit My Profile
      </a>
      {showTestimonial && "testimonial"}
    </div>
  );
}

export default Elharefa;
