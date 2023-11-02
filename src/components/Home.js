import React from "react";
import { Banner } from "./Banner";

import { PortfolioItems } from "../com/PortfolioItems";
import { Brief } from "./brief";

function Home() {
  return (
    <div className="App color-overlay">
      {/* <Banner /> */}
      <Brief />
      <PortfolioItems />
    </div>
  );
}

export default Home;
