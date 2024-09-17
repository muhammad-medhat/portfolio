import React from "react";
import { Banner } from "../../../com/Banner";
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
      <p>
        Hi there! My name is Muhammad Medhat, and I'm a WordPress and React
        developer with 10+ of Years of experience in the field. I'm passionate
        about creating beautiful and functional websites that not only look
        great but also provide a seamless user experience.
      </p>
      <h3>my experience</h3>
      {/* <ul>
        <li>created multiple websites using joomla</li>
        <li></li>
      </ul> */}

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
            <h3>WordPress Developer</h3>
            <p>{jobSummary}</p>
          </div>

          <div className="info">
            <h3 className="personalInformationHeaderText">
              <i className="fa-sharp fa-regular fa-address-card"></i>
              Personal Information
            </h3>
            <h4>
              {name}
              {/* <span className="sm">{ageDiff} Years</span> */}
            </h4>
            <ul>
              {personalDetails.map((item, i) => (
                //cls = item.noBorder? "no-border":""

                <li key={i} className={item.noBorder}>
                  {item.label ? <span className="title"></span> : ""}

                  {item.icon ? (
                    <span className="title">
                      <i className={item.icon}></i>
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
