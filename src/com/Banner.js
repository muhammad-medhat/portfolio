import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile-img.jpeg";
import { Link } from "react-router-dom";

export const Banner = () => {
  const toRotate = [
    "MERN Web Developer",
    "Wordpress Developer",
    "Search Engine Optimization",
  ];

  const period = 1000;

  useEffect(() => {}, []);

  return (
    <>
      <Link className="image avatar" to="/about">
        <img className="image avatar" src={profileImg} alt="Muhammad Medhat" />
      </Link>
      <div className="capitalize">
        <h1>Muhammad Medhat</h1>
        <h3>professional Web Developer</h3>
        <h4>(Mern Stack, Wordpress)</h4>
      </div>
    </>
  );
};
