import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import profileImg from "../assets/img/profile-img.jpeg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import { ContactInfo } from "./ContactInfo";
import { Link } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "MERN Web Developer",
    "Wordpress Developer",
    "Search Engine Optimization",
  ];

  const period = 1000;

  useEffect(() => {}, [text]);

  return (
    <>
      <Link className="image avatar" to="/about">
        <img className="image avatar" src={profileImg} alt="Muhammad Medhat" />
      </Link>
      <div className="capitalize">
        <h1>Hi! I'm Muhammad Medhat</h1>
        <h3>professional Web Developer</h3>
        <h4>(Mern Stack, Wordpress)</h4>
      </div>

      {/* <div className=""></div>
      <div className=""></div> */}
    </>
  );
};
