import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./components/pages/Home";
import { Projects } from "./components/pages/projects/Projects";
import About from "./components/pages/about/";
import { Contact } from "./components/pages/contact";
// import "font-awesome/css/font-awesome.min.css";
import { Todos } from "./components/apps/todo";
import { Sidebar } from "./com/Sidebar";
import "./styles/main.css";
import "./styles/media.css";
import "./styles/components.css";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  const baseUrl = "";
  // const baseUrl = "portfolio";
  return (
    <div className="" style={{ display: "grid" }}>
      <Sidebar />
      <div id="main" className="main">
        <Routes>
          <Route exact path={`${baseUrl}/`} element={<Home />} />
          <Route path={`${baseUrl}/projects`} element={<Projects />} />
          <Route path={`${baseUrl}/about`} element={<About />} />
          <Route path={`${baseUrl}/contact`} element={<Contact />} />
          <Route path={`${baseUrl}/todos`} element={<Todos />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
