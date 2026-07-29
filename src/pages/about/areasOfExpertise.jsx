import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "react-bootstrap";

function AreasOfExpertise() {
  const services = [
    {
      icon: "fa-brands fa-wordpress",
      title: "WordPress Development",
      description:
        "Custom WordPress websites, WooCommerce stores, themes, and plugins tailored to business needs.",
      skills: ["WordPress", "WooCommerce", "Elementor", "Gutenberg"],
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Custom Web Applications",
      description:
        "Responsive and scalable web applications built with modern frontend and backend technologies.",
      skills: ["React", "JavaScript", "PHP", "Node.js"],
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Performance & SEO",
      description:
        "Improve speed, Core Web Vitals, and search engine visibility for a better user experience.",
      skills: ["Caching", "SEO", "Images", "Core Web Vitals"],
    },
    {
      icon: "fa-solid fa-user-graduate",
      title: "Technical Consulting",
      description:
        "Code reviews, mentoring, architecture guidance, and development best practices.",
      skills: ["Mentoring", "Reviews", "Training"],
    },
  ];
  return (
    <section className="sec-areas py-5">
      <div className="text-center mb-5">
        <h3 className="fw-bold title">Areas of Expertise</h3>
        <p className="text-muted subtitle">
          I help businesses build fast, scalable, and user-friendly web
          solutions using modern web technologies.
        </p>
      </div>

      <Row className="g-4">
        {services.map((service) => (
          <Col key={service.title} lg={6} xl={3}>
            <div className="service-card h-100 p-4">
              <div className="icon">
                <i className={service.icon}></i>
              </div>

              <h4>{service.title}</h4>

              <p>{service.description}</p>

              <div className="skills">
                {service.skills.map((skill) => (
                  <span key={skill} className="badge rounded-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default AreasOfExpertise;
