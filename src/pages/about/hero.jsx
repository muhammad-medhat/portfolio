import React from "react";
import pic from "../../assets/img/new-profile.png";
import res from "../../assets/md/Wordpress Developer - Muhammad Medhat.pdf";
import { Row, Col } from "react-bootstrap";
function Hero() {
  return (
    <section className="sec-about-hero py-5">
      <Row className="align-items-center g-5">
        {/* Left Side */}

        <Col lg={4} className="text-center">
          <div className="profile-image">
            <img src={pic} alt="Muhammad Medhat" className="img-fluid" />
          </div>
        </Col>

        {/* Right Side */}

        <Col lg={8}>
          <span className="availability">
            <i className="fa-solid fa-circle"></i>
            Available for Freelance Projects
          </span>

          <h1 className="display-5 fw-bold mt-3">Muhammad Medhat</h1>

          <h2 className="profession">
            Building Fast, Scalable WordPress Solutions
          </h2>

          <p className="lead">
            I help businesses build <strong>fast</strong>,
            <strong> scalable</strong>, and
            <strong> user-focused</strong> web solutions. My expertise includes
            <strong> WordPress</strong>,<strong> WooCommerce</strong>,
            <strong> PHP</strong>,<strong> JavaScript</strong>,
            <strong> React</strong>, and
            <strong> performance optimization</strong>, delivering websites that
            are modern, maintainable, and built for growth.
          </p>

          {/* Tech Badges */}

          {/* prettier-ignore */}
          <div className="tech-badges">
            <span><i className="fa-brands fa-wordpress"></i> WordPress</span>
            <span><i className="fa-solid fa-cart-shopping"></i> WooCommerce</span>
            <span><i className="fa-brands fa-php"></i> PHP</span>
            <span><i className="fa-brands fa-js"></i> JavaScript</span>
            <span><i className="fa-brands fa-react"></i> React</span>
          </div>

          {/* Buttons */}

          <div className="hero-buttons mt-4">
            <a href="/portfolio/projects" className="btn btn-primary btn-lg">
              Explore My Work
            </a>

            <a
              href={res}
              target="_blank"
              className="btn btn-outline-dark btn-lg">
              Download Resume
            </a>
          </div>

          {/* Quick Stats */}

          {/* <Row className="hero-stats mt-5">
            <Col xs={4}>
              <h3>15+</h3>

              <p>Years Experience</p>
            </Col>

            <Col xs={4}>
              <h3>5+</h3>

              <p>Years WordPress</p>
            </Col>

            <Col xs={4}>
              <h3>500+</h3>

              <p>Students Mentored</p>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </section>
  );
}

export default Hero;
