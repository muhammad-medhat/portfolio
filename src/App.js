// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./com/Navbar/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactInfo } from "./components/ContactInfo";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/";
// import "font-awesome/css/font-awesome.min.css";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  const baseUrl = "portfolio";
  return (
    <div className="App1 color-overlay">
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path={`${baseUrl}/`} element={<Home />} />
          <Route path={`${baseUrl}/projects`} element={<Projects />} />
          <Route path={`${baseUrl}/about`} element={<About />} />
          <Route path={`${baseUrl}/contact`} element={<Contact />} />{" "}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
