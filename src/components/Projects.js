import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";
import projects from "../projectsData.js";
import "./projects.css";

export const Projects = () => {
  // console.log(projects);
  const wp = projects.filter((p) => p.cat == 1);
  const js = projects.filter((p) => p.cat == 2);
  const ud = projects.filter((p) => p.cat == 3);
  // console.log(wp);
  // console.log(js);
  // console.log(ud);

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="cont">
                  <h2 className="title">Projects</h2>
                  <p className="intro">
                    Through a fusion of technical skill and creative thinking, a
                    collection of custom web applications have been developed to
                    empower businesses and share creative work with the world.
                    From ecommerce stores and open-source platforms to
                    portfolios and WordPress workflow wonders, precision-built
                    websites bring key concepts to life on the internet.
                  </p>
                  <div className="disc">
                    Please note that the items displayed in my portfolio are
                    accepted and approved for sharing.
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Cms: Joomla, WordPress
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React, NodeJS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Udacity Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {wp.map((x, i) => {
                            return <ProjectCard key={x.slug} {...x} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {js.map((x, i) => {
                            return <ProjectCard key={x.slug} {...x} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {ud.map((x, i) => {
                            return <ProjectCard key={x.slug} {...x} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
