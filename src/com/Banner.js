import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile-img.jpeg";
import { Link } from "react-router-dom";
import Logo from "../assets/md/logo.svg";

export const Banner = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Link className="image avatar" to="/about" style={{ marginTop: "5rem" }}>
        <img className="image avatar" src={profileImg} alt="Muhammad Medhat" />
      </Link>
      <div className="capitalize">
        <img
          src={Logo}
          alt="Muhammad Medhat"
          style={{
            maxHeight: "6rem",
          }}
        />
      </div>
    </>
  );
};
