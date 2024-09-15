import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./components/pages/Home";
// import { Projects } from "./components/pages/projects/Projects";
import About from "./components/pages/about/";
import { Contact } from "./components/pages/contact";
import { Sidebar } from "./com/Sidebar";

import "./assets/sass/main-md.scss";

import { MyTools } from "./components/pages/MyTools";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";

  return (
    <div className="wrapper">
      <header id="header" className="flex flex-column justify-content-around">
        <Sidebar />
      </header>
      <div id="main" className="main">
        <main>
          <Routes>
            <Route exact path={`/`} element={<Home />} />
            {/* <Route path={`/projects`} element={<Projects />} /> */}
            <Route path={`/about`} element={<About />} />
            <Route path={`/contact`} element={<Contact />} />
            <Route path={`/tools`} element={<MyTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
