import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./ContactInfo.css";
export const ContactInfo = () => {
  return (
    <section className="contact info" id="connect" style={{ opacity: 0.9 }}>
      <Container>
        <h2 className="title">Contact Information</h2>

        <div className="cols">
          <Col>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>Alexandria, Egypt</span>
          </Col>

          <Col>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>+20 1272323297</span>
          </Col>

          <Col>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>muhammad.medhat@gmail.com</span>
          </Col>
        </div>
      </Container>
    </section>
  );
};
