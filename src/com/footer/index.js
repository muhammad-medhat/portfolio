import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/md/logo.svg";
import "./footer.css";
import Social from "../social";
export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container className="inner">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img srcSet={`${logo} 763px ${logoImg} 320px`} src={logo} alt="" /> */}
            <img src={logo} alt="Muhammad Medhat" style={{}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <Social iconsToShow={["gh", "dt", "ln", "yt", "fb", "tw"]} />
            <p>
              Copyright &copy; 2023 - {new Date().getFullYear()}. All Rights
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
