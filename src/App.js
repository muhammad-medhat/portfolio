// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./com/Navbar/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
// import { ContactInfo } from "./components/ContactInfo";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { Projects } from "./components/pages/projects/Projects";
import About from "./components/pages/about/";
import { Contact } from "./components/pages/contact";
import { Todos } from "./components/apps/todo";
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
          <Route path={`${baseUrl}/contact`} element={<Contact />} />
          <Route path={`${baseUrl}/todos`} element={<Todos />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
