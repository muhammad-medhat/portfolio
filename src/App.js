import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./components/pages/Home";
// import { Projects } from "./components/pages/projects/Projects";
import About from "./components/pages/about/";
import Contact from "./components/pages/contact";
import { Sidebar } from "./com/Sidebar";
import MyTools from "./components/pages/MyTools";

import "./assets/sass/main-md.scss";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  const scrollTop = () => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="wrapper">
      <header id="header" className="flex flex-column justify-content-around">
        <Sidebar />
      </header>
      <div id="main" className="main">
        <main>
          <Routes>
            <Route exact path={`/`} element={<Home scrollTop={scrollTop} />} />
            {/* <Route path={`/projects`} element={<Projects scrollTop={scrollTop}/>} /> */}
            <Route path={`/about`} element={<About scrollTop={scrollTop} />} />
            <Route
              path={`/contact`}
              element={<Contact scrollTop={scrollTop} />}
            />
            <Route
              path={`/tools`}
              element={<MyTools scrollTop={scrollTop} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
