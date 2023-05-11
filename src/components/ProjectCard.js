import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, desc, image }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        // style={{
        //   backgroundImage: `url(${image})`,
        //   backgroundSize: "cover",
        //   border: "solid",
        //   height: "400px",
        // }}
      >
        <img src={image} alt={`Project: ${title}`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  );
};
