import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/md/logo.svg";
import "./footer.css";
import Social from "../social";
import Copyright from "../copyright/Copyright";
export default function Footer () {
  return (
    <footer className="footer" id="footer">
      <div className="logo">
            <img src={logo} alt="Muhammad Medhat" style={{}} />

      </div>
        <div className="soc-info">
          <Social iconsToShow={["gh", "dt", "ln", "yt", "fb", "tw"]} />
          <Copyright/>
        </div> 
    </footer>
  );
};
