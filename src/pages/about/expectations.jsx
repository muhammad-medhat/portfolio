import React from "react";
import { Row, Col } from "react-bootstrap";

function Expectations() {
  const values = [
    {
      icon: "fa-solid fa-code",
      title: "Clean Code",
      description: "Maintainable, scalable, and easy to understand.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Performance First",
      description: "Fast-loading websites optimized for Core Web Vitals.",
    },
    {
      icon: "fa-solid fa-comments",
      title: "Clear Communication",
      description: "Transparent updates and smooth collaboration.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Problem Solving",
      description: "Finding practical solutions for real business challenges.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Reliable Delivery",
      description: "Well-tested solutions delivered on schedule.",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "Continuous Growth",
      description: "Always learning new technologies and best practices.",
    },
  ];
  return (
    <div className="sec-expectations">
      <h3 className="title">What You Can Expect</h3>
      <p className="subtitle">
        Here's what you can expect from our collaboration:
      </p>
      <Row className="g-4">
        {values.map((value) => (
          <Col lg={4} md={6} key={value.title}>
            <div className="value-card h-100">
              <i className={value.icon}></i>

              <h4>{value.title}</h4>

              <p>{value.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Expectations;
