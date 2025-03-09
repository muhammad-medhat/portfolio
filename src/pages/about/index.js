import React from "react";
import { Banner } from "../../com/Banner";
import { Animate } from "react-simple-animate";
// import "./about.css";
// import "./styles.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const ageDiff = new Date().getFullYear() - 1983;
  const name = "Muhammad Medhat";
  const personalDetails = [
    {
      // label: "Address",
      icon: "fa-sharp fa-solid fa-location-dot",
      value: "Alexandria, Eg",
    },
    {
      // label: "Email",
      icon: "fa-regular fa-envelope",
      value: "muhammad.medhat@gmail.com",
    },
    {
      // label: "Contact No",
      icon: "fa-solid fa-phone",
      value: "+2 01272323297",
      noBorder: "no-border",
    },
  ];

  const jobSummary = (
    <>
      <h3>About Me</h3>
      <p>
        Hi, I’m Muhammad Medhat, a WordPress Developer with over a decade of
        experience in web development. My journey started in 2007 with ASP.Net
        and C#, later transitioning to PHP and open-source technologies in 2010.
        Since 2020, I’ve focused exclusively on WordPress development, crafting
        custom themes, plugins, and WooCommerce solutions tailored to
        businesses' needs. I’ve worked on diverse projects, from e-commerce
        platforms to corporate websites, ensuring performance, scalability, and
        seamless user experiences. Some of my notable projects include custom
        WooCommerce templates, WordPress plugins, and developing engaging
        content-driven sites.
        <blockquote>
          Beyond development, I’m passionate about coaching and mentoring
          aspiring freelancers, helping them build careers in web development
          through hands-on guidance. I’ve collaborated with organizations like
          Elhareefa and DEBI to support students in navigating the freelancing
          world. If you’re looking for a skilled WordPress developer to bring
          your project to life—or need guidance on launching your freelancing
          career—I’d love
        </blockquote>
      </p>

      <p className="no-border">
        Thank you for taking the time to read my about me page. I would love to
        hear more about your project and how I can help you achieve your goals.
        Feel free to get in touch with me anytime!
      </p>
    </>
  );
  let cls = "";

  return (
    <div className="about__content">
      <div className="about__content__personalWrapper">
        <div className="d-flex">
          <div>
            <p>{jobSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
