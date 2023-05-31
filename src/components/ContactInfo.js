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
        <h2>Contact Information</h2>
        <div className="cont border">
          <Row>
            <Col>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </Col>
            <Col>Alexandria. Egypt</Col>
          </Row>
          <Row>
            <Col>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </Col>
            <Col>+20 1272323297</Col>
          </Row>
          <Row>
            <Col>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </Col>
            <Col>muhammad.medhat@gmail.com</Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
