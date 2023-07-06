import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";
import projects from "../../../projectsData.js";
import "./projects.css";

export const Projects = () => {
  const wp = projects.filter((p) => p.cat === 1);
  const js = projects.filter((p) => p.cat === 2);
  const ud = projects.filter((p) => p.cat === 3);

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
                  <Tab.Container id="projects-tabs" defaultActiveKey="cms">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center row1"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link className="" eventKey="cms">
                          Cms: Joomla, WordPress
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="" eventKey="js">
                          React, NodeJS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="" eventKey="udacity">
                          Udacity Projects
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link className="" eventKey="mobile">
                          Mobile Apps
                        </Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="cms">
                        <Row>
                          <div className="tab-cont">
                            <div className="disc" style={{ padding: "2rem" }}>
                              Since 2011, I've created countless Joomla and
                              WordPress websites for my clients. I use the
                              latest platforms, and my websites are beautiful,
                              easy to use, and optimized for search engines.
                              Let's create something great!
                            </div>
                            <div className="project-list">
                              {wp.map((x, i) => {
                                return <ProjectCard key={x.slug} {...x} />;
                              })}
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="js">
                        <Row>
                          <div className="tab-cont">
                            <div className="disc">
                              In this section of my portfolio, you'll find some
                              of my favorite projects using React and MERN
                              stack. I'm proud to showcase my work!
                            </div>
                            <div className="project-list">
                              {js.map((x, i) => {
                                return <ProjectCard key={x.slug} {...x} />;
                              })}
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="udacity">
                        <Row>
                          <div className="tab-cont">
                            <div className="disc">
                              In my portfolio, you'll find examples of my work
                              on professional training websites for React and
                              Python Udacity nano-degrees. I'm excited to share
                              my projects with you!
                            </div>
                            <div className="project-list">
                              {ud.map((x, i) => {
                                return <ProjectCard key={x.slug} {...x} />;
                              })}
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        <Row>
                          {/* {ud.map((x, i) => {
                            return <ProjectCard key={x.slug} {...x} />;
                          })} */}
                          <div className="intro">
                            Although there are no mobile apps available at the
                            moment, I'm excited to let you know that I'm
                            currently working on developing some awesome
                            projects using React Native. Stay tuned for updates
                            and feel free to browse through my portfolio to see
                            some of my past work.
                          </div>
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
