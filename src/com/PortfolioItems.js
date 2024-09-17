import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/pages/projects/ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";
import projects from "../projectsData.js";
import "../components/pages/projects/projects.css";

export const PortfolioItems = () => {
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
                  <h2 className="title">Portfolio</h2>
                  <p className="intro">
                    Joomla and WordPress websites made for my freelance clients.
                  </p>
                  <div className="disc">
                    Please note that the items displayed in my portfolio are
                    accepted and approved for sharing.
                  </div>

                  <Row>
                    <div className="tab-cont">
                      <div className="disc" style={{ padding: "2rem" }}>
                        Since 2011, I've created countless Joomla and WordPress
                        websites for my clients. I use the latest platforms, and
                        my websites are beautiful, easy to use, and optimized
                        for search engines. Let's create something great!
                      </div>
                      <div className="project-list">
                        {wp.map((x, i) => {
                          return <ProjectCard key={x.slug} {...x} />;
                        })}
                      </div>
                    </div>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
