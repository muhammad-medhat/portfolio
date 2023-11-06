import React from "react";
import { Banner } from "../../../com/Banner";

import { Brief } from "../../../com/brief";
import { ProjectsList } from "../../ProjectsList";
import { GetinTouch } from "../../../com/GetInTouch";

function Home() {
  return (
    <div className="App color-overlay">
      <Brief />
      <ProjectsList />
      <GetinTouch />
    </div>
  );
}

export default Home;
