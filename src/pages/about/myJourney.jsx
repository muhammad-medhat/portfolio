import React from "react";
import { Row, Col } from "react-bootstrap";

function MyJourney() {
  const journey = [
    {
      year: "2008",
      title: "Started My Career",
      description:
        "Began building dynamic websites and learning the foundations of professional web development.",
    },
    {
      year: "2010",
      title: "Full-Stack Development",
      description:
        "Worked on corporate websites, custom web applications, and business solutions using PHP and JavaScript.",
    },
    {
      year: "2020",
      title: "WordPress Specialist",
      description:
        "Focused on custom WordPress development, WooCommerce, performance optimization, and scalable websites.",
    },
    {
      year: "Today",
      title: "Developer & Mentor",
      description:
        "Building modern web solutions while mentoring students and helping developers grow through practical learning.",
    },
  ];
  return (
    <section className="sec-journey py-5">
      <div className="text-center mb-5">
        <h3 className="title">My Journey</h3>

        <p className="subtitle">
          A brief look at how my experience has evolved into building modern web
          solutions.
        </p>
      </div>

      <Row className="g-5 align-items-start">
        <Col lg={4}>
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="year">{item.year}</span>

                <h5>{item.title}</h5>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Col>

        <Col lg={8}>
          <div className="story">
            <div className="quote">
              Building modern web solutions while continuously learning and
              helping others grow.
            </div>
            <p>
              My journey in web development began in <strong>2008</strong>,
              building dynamic websites and web applications with{" "}
              <strong>PHP</strong> and modern web technologies. Over the years,
              I've worked with businesses across different industries,
              delivering everything from corporate websites to e-commerce
              platforms and custom web applications.
            </p>

            <p>
              Today, I specialize in <strong>WordPress development</strong>,
              creating custom websites, <strong>WooCommerce</strong> stores,
              themes, plugins, and API integrations. I focus on writing clean,
              maintainable code while optimizing websites for
              <strong> performance</strong>, <strong>Core Web Vitals</strong>,
              <strong> SEO</strong>, and an excellent user experience.
            </p>

            <p>
              Alongside development, I discovered a passion for teaching and
              mentoring. As a web development instructor, I teach
              <strong> HTML</strong>, <strong>CSS</strong>,
              <strong> JavaScript</strong>, and WordPress through practical,
              project-based learning, helping students build confidence and
              real-world development skills.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default MyJourney;
