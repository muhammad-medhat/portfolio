import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/fonts.css";

import App from "./App";

import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
