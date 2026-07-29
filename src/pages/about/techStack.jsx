import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TechStack() {
  const techStack = [
    {
      title: "CMS & E-Commerce",
      items: [
        { icon: "fa-brands fa-wordpress", name: "WordPress" },
        { icon: "fa-solid fa-cart-shopping", name: "WooCommerce" },
        { icon: "fa-solid fa-table-columns", name: "Elementor" },
        { icon: "fa-solid fa-layer-group", name: "Gutenberg" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { icon: "fa-brands fa-html5", name: "HTML5" },
        { icon: "fa-brands fa-css3-alt", name: "CSS3" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-react", name: "React" },
        { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: "fa-brands fa-php", name: "PHP" },
        { icon: "fa-brands fa-laravel", name: "Laravel" },
        { icon: "fa-brands fa-node-js", name: "Node.js" },
        { icon: "fa-brands fa-python", name: "Python" },
        { icon: "fa-solid fa-plug", name: "REST APIs" },
      ],
    },
    {
      title: "Database & Tools",
      items: [
        { icon: "fa-solid fa-database", name: "MySQL" },
        { icon: "fa-solid fa-database", name: "PostgreSQL" },
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-brands fa-github", name: "GitHub" },
      ],
    },
  ];
  return (
    <section className="sec-tech py-5">
      <div className="text-center mb-5">
        <h3 className="title">Tech Stack</h3>

        <p className="subtitle">
          Technologies I use to build fast, scalable, and reliable web
          solutions.
        </p>
      </div>

      <Row className="g-4">
        {techStack.map((category) => (
          <Col lg={3} md={6} key={category.title}>
            <div className="tech-card">
              <h4>{category.title}</h4>

              <ul>
                {category.items.map((tech) => (
                  <li key={tech.name}>
                    <i className={tech.icon}></i>

                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default TechStack;
