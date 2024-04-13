import React from "react";
import "./social.css";
import frontendMentorLogo from "../../assets/img/social/frontendmentor.svg";

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
      <li>
        <a target="_blank" href="https://www.youtube.com/@muhammadmedhat1">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.frontendmentor.io/profile/muhammad-medhat">
          <img src={frontendMentorLogo} alt="" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://dev.to/muhammadmedhat">
          {/* <img src="../../assets/img/dev.png" alt="" /> */}
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="dev.to"
          />
        </a>
      </li>
    </ul>
  );
}
