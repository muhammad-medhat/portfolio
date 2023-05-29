import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectDetails = () => {

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (

              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
