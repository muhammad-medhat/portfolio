import React from "react";
import { Banner } from "./Banner";

import { PortfolioItems } from "../com/PortfolioItems";

function Home() {
  return (
    <div className="App color-overlay">
      <Banner />
      <PortfolioItems />
    </div>
  );
}

export default Home;
