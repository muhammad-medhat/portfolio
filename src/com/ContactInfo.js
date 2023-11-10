import React from "react";

export const ContactInfo = () => {
  return (
    <ul class="labeled-icons capitalize">
      <li>
        <h3 class="icon solid fa-location-dot">
          <span class="label">location</span>
        </h3>
        alexandria, egypt
      </li>
      <li>
        <h3 class="icon solid fa-mobile-alt">
          <span class="label">Phone</span>
        </h3>
        +20 1272323297
      </li>
      <li>
        <h3 class="icon solid fa-envelope">
          <span class="label">Email</span>
        </h3>
        <a href="mailto:muhammad.medhat@gmail.com">muhammad.medhat@gmail.com</a>
      </li>
    </ul>
  );
};
