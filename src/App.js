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
import About from "./components/About";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  return (
    <div className="App color-overlay">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
