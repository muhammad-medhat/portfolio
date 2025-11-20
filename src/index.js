import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/custom-properties.css";
import "./styles/utility-classes.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
