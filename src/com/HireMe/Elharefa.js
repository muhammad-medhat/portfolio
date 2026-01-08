import React from "react";

function Elharefa({ showTestimonial }) {
  return (
    <div className="elharefa-cont">
      <h2>Hire me on Elharefa</h2>
      <p>
        Elharefa is a popular freelancing platform in the Arab world where you
        can hire me for various services including web development, software
        engineering, and more. By hiring me through Elharefa, you can benefit
        from their secure payment system and customer support.
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
