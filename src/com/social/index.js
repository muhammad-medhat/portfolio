import React, { useEffect } from "react";
import "./social.css";
// import frontendMentorLogo from "../../assets/img/social/frontendmentor.svg";

export default function Social({ iconsToShow = [] }) {
  const socialObjArr = [
    {
      id: "gh",
      href: "https://github.com/muhammad-medhat",
      cls: "fa-brands fa-github",
    },
    {
      id: "ln",

      href: "https://www.linkedin.com/in/muhammad-medhat/",
      cls: "fa-brands fa-linkedin-in",
    },
    {
      id: "tw",

      href: "https://twitter.com/muhammad_medhat",
      cls: "fa-brands fa-twitter fa-2xs",
    },
    {
      id: "fb",

      href: "https://www.facebook.com/muhammad.medhat.1983/",
      cls: "fa-brands fa-facebook-f",
    },
    {
      id: "yt",

      href: "https://www.youtube.com/@muhammadmedhat1",
      cls: "fa-brands fa-youtube",
    },
    {
      id: "fem",
      href: "https://www.frontendmentor.io/profile/muhammad-medhat",
      img: {
        src: "./img/social/frontendmentor.svg",
        alt: "Frontend Mentor",
      },
    },
    {
      id: "dt",
      href: "https://dev.to/muhammadmedhat",
      img: {
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
        alt: "dev.to",
      },
    },
  ];
  useEffect(() => {});
  return (
    <ul className="social-icons icons ">
      {iconsToShow &&
        socialObjArr
          .filter((item) => iconsToShow.includes(item.id))
          .map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank">
                {item.img ? (
                  <img src={item.img.src} alt={item.img.alt} />
                ) : (
                  <i className={item.cls}></i>
                )}
              </a>
            </li>
          ))}
    </ul>
  );
}
