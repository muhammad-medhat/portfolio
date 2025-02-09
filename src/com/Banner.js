import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile-img.jpeg";
import { Link } from "react-router-dom";
import Logo from "../assets/md/logo.svg";
import styled from "styled-components";

export const Banner = ({ handleNavigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* <Link className="image avatar" to="/about" style={{ marginTop: "5rem" }}> */}
      <Link className="image avatar" to="/">
        <img
          className="image avatar"
          onClick={() => handleNavigation("/")}
          src={profileImg}
          alt="Muhammad Medhat"
        />
      </Link>
      <div className="capitalize">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className=" "
            src={Logo}
            alt="Muhammad Medhat"
            style={{
              maxHeight: "6rem",
              opacity: isHovered ? 1 : 0.5,
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
        </Link>
      </div>
    </>
  );
};
