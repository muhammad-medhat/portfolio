// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./com/Navbar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./components/Home";
import { Projects } from "./components/pages/projects/Projects";
import About from "./components/pages/about/";
import { Contact } from "./components/pages/contact";
// import "font-awesome/css/font-awesome.min.css";
import { Todos } from "./components/apps/todo";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  const baseUrl = "";
  // const baseUrl = "portfolio";
  return (
    <div className="App1 color-overlay">
      <NavBar />
      {/* <ResponsiveAppBar /> */}
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
