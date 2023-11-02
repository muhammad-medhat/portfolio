import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";
// import "./styles/reset.css";
import "./styles/custom-properties.css";
import "./styles/utility-classes.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
