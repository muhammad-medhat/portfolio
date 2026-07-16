import React from "react";

export const ContactInfo = () => {
  return (
    <ul className="labeled-icons capitalize">
      <li>
        <h3 className="icon ">
          <i className="mx-2 fa-solid fa-location-dot"></i>location
        </h3>

        <p className="mx-2">alexandria, egypt</p>
      </li>
      <li>
        <h3 className="icon">
          <i className="mx-2 fa-solid fa-mobile-alt"></i>Phone
        </h3>
        <p className="mx-2">+20 1272323297</p>
      </li>
      <li>
        <h3 className="icon ">
          <i className="mx-2 fa-solid fa-envelope"></i>Email
        </h3>
        <p className="mx-2">
          <a href="mailto:muhammad.medhat@gmail.com">
            muhammad.medhat@gmail.com
          </a>
        </p>
      </li>
    </ul>
  );
};
