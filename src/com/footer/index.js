import { Container, Row, Col } from "react-bootstrap";
// import logo from "../../logo.svg";
import logo from "../../assets/img/logo.png";
import "./footer.css";
import Social from "../social";
export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container className="inner">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="" style={{ width: 150, height: 150 }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <Social iconsToShow={["fem", "dt", "ln"]} />
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
