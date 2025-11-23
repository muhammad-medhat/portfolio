import React, { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import "./styles.css";
import { VsExtensions } from "./vsExtensions";
import { WordpressTools } from "./wordPressTools";

function MyTools() {
  useEffect(() => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div id="tools">
      <h2>Welcome to my Essential Tools page!</h2>
      <p>
        Discover a hand-picked selection of powerful tools that will supercharge
        your web development journey. I have carefully curated a collection of
        must-have tools that can enhance your productivity, streamline your
        workflows, and unlock new possibilities in your projects.
      </p>
      <Tab.Container id="tools-tabs" transition={true} defaultActiveKey="wp">
        <Nav
          variant="pills"
          className="nav-pills mb-5 justify-content-center align-items-center"
          id="pills-tab">
          <Nav.Item>
            <Nav.Link className="" eventKey="wp">
              WordPress Plugins
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="" eventKey="vs">
              VsCode Extensions
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="wp">
            <WordpressTools />
          </Tab.Pane>
          <Tab.Pane eventKey="vs">
            <VsExtensions />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
export default MyTools;
