import React from "react";
import "./social.css";

export default function Social() {
  return (
    <ul className="social-icons icons ">
      <li>
        <a target="_blank" href="https://github.com/muhammad-medhat">
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/muhammad-medhat/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/muhammad_medhat">
          <i className="fa-brands fa-twitter fa-2xs"></i>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.facebook.com/muhammad.medhat.1983/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </li>
    </ul>
  );
}
