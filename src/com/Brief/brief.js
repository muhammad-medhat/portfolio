import React from "react";
import logo from "../../assets/md/logo-img.svg";
import "./style.css";
export const Brief = () => {
  return (
    <section id="one">
      <header className="major capitalize flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: "10rem",
          }}
        />
        <h2>professional WordPress developer</h2>
      </header>
      <p className="text-start">
        Hi there! I am a web developer with expertise in JavaScript, React,
        WordPress, and PHP. I have a passion for creating beautiful and
        functional websites that provide a seamless user experience. With
        several years of experience under my belt, I have developed a deep
        understanding of web development best practices and stay up-to-date with
        the latest technologies and trends. Whether it's building a custom
        WordPress site or creating a dynamic web application with React, I am
        dedicated to delivering high-quality work that exceeds expectations.
        When I'm not coding, you can find me exploring new hiking trails or
        catching up on the latest tech news.
      </p>
      {/* <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul> */}
    </section>
  );
};
