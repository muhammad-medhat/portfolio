// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactInfo } from "./components/ContactInfo";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  return (
    <div className="App color-overlay">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <ContactInfo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
