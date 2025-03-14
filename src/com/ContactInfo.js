import React from "react";

export const ContactInfo = () => {
  return (
    <ul className="labeled-icons capitalize">
      <li>
        <h3 className="icon solid fa-location-dot">
          <span className="label">location</span>
        </h3>
        alexandria, egypt
      </li>
      <li>
        <h3 className="icon solid fa-mobile-alt">
          <span className="label">Phone</span>
        </h3>
        +20 1272323297
      </li>
      <li>
        <h3 className="icon solid fa-envelope">
          <span className="label">Email</span>
        </h3>
        <a href="mailto:muhammad.medhat@gmail.com">muhammad.medhat@gmail.com</a>
      </li>
    </ul>
  );
};
