import { Col } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import "./components.css";
import { CheckLg } from "react-bootstrap-icons";

export const ProjectCard = ({ title, desc, image, longDesc }) => {
  // console.log("img", image);
  return (
    <Col xs={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        style={{
          backgroundImage: `url(${image.replace(/\s/g, "%20")})`,
          // backgroundSize: "cover",
          // height: "400px",
        }}
      >
        {/* <img src={image} alt={`Project: ${title}`} /> */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  );
};
