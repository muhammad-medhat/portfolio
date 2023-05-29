import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ContactInfo = () => {
  return (
    <section className="contact" id="connect" style={{ opacity: 0.9 }}>
      <h2>Contact Information</h2>
      <Container style={{ fontSize: "x-large" }}>
        <Row className=" d-flex">
          <Col
            style={{
              textAlign: "right",
            }}
          >
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </Col>
          <Col
            style={{
              textAlign: "left",
            }}
          >
            Alexandria. Egypt
          </Col>
        </Row>
        <Row className=" d-flex">
          <Col
            style={{
              textAlign: "right",
            }}
          >
            <i className="fa fa-phone" aria-hidden="true"></i>
          </Col>
          <Col
            style={{
              textAlign: "left",
            }}
          >
            +20 1272323297
          </Col>
        </Row>
        <Row className=" d-flex">
          <Col
            style={{
              textAlign: "right",
            }}
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </Col>
          <Col
            style={{
              textAlign: "left",
            }}
          >
            muhammad.medhat@gmail.com
          </Col>
        </Row>
      </Container>
    </section>
  );
};
