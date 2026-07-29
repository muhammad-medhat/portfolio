import React from "react";
import { Row, Col } from "react-bootstrap";
function Beyond() {
  const beyondDevelopment = [
    {
      icon: "fa-solid fa-user-graduate",
      title: "Teaching & Mentoring",
      description:
        "I enjoy helping students and junior developers build confidence through practical coding, code reviews, and real-world projects.",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "Continuous Learning",
      description:
        "I regularly explore new technologies, development practices, and modern tools to keep my skills current and deliver better solutions.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Personal Projects",
      description:
        "I build side projects to experiment with new ideas, improve my skills, and explore different approaches to solving real-world problems.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Knowledge Sharing",
      description:
        "I enjoy creating educational content, documenting solutions, and sharing practical experiences that help other developers grow.",
    },
  ];
  return (
    <section className="sec-beyond py-5">
      <div className="text-center mb-5">
        <h3 className="title">Beyond Development</h3>

        <p className="subtitle">
          The interests and activities that continue to shape me as a developer
          and mentor.
        </p>
      </div>

      <Row className="g-4">
        {beyondDevelopment.map((item) => (
          <Col lg={6} key={item.title}>
            <div className="beyond-card">
              <div className="icon">
                <i className={item.icon}></i>
              </div>

              <div className="content">
                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="quote">
        <p>
          “Technology evolves every day, but curiosity, continuous learning, and
          helping others grow are the values that have guided my journey
          throughout my career.”
        </p>
      </div>
    </section>
  );
}

export default Beyond;
