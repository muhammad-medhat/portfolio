import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer shiny-box">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://github.com/muhammad-medhat">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-medhat/"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/muhammad.medhat.1983/"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://twitter.com/muhammad_medhat">
                <i className="fa-brands fa-twitter fa-2xs"></i>
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
