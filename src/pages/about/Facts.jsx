import React from "react";
import { Row, Col } from "react-bootstrap";

function Facts() {
  const facts = [
    {
      icon: "fa-solid fa-briefcase",
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: "fa-brands fa-wordpress",
      value: "5+",
      label: "Years in WordPress",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      value: "M.Sc.",
      label: "Computer Science",
    },
    {
      icon: "fa-solid fa-laptop-code",
      value: "2020",
      label: "Remote Since",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      value: "Mentor",
      label: "Instructor & Technical Coach",
    },
    {
      icon: "fa-solid fa-handshake",
      value: "50+",
      label: "Happy Clients",
    },
  ];
  return (
    <div className="sec-at-a-glance">
      <h3 className="title">At a Glance</h3>
      <p className="subtitle">
        A quick overview of my professional journey, skills, and achievements in
        the tech industry.
      </p>
      <Row className="g-4">
        {facts.map((fact) => (
          <Col lg={4} md={6} key={fact.label}>
            <div className="fact-card">
              <i className={fact.icon}></i>
              <h2>{fact.value}</h2>
              <p>{fact.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Facts;
