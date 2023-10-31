import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import "./navbar.css";

import { HashLink } from "react-router-hash-link";
import Social from "../social";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const homePage = "";
  // const homePage = "portfolio";

  return (
    <Navbar
      expand="md"
      className={`${"shiny-box " + (scrolled ? "scrolled" : "")}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to={`/`}
              className={`${
                "navbar-link nav-link " +
                (activeLink === "home" ? "active" : "")
              }`}
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </Link>

            <Link
              to={`/about`}
              className={`${
                "navbar-link nav-link " +
                (activeLink === "about" ? "active" : "")
              }`}
              onClick={() => onUpdateActiveLink("about")}>
              About Me
            </Link>
            <Link
              to={`/projects`}
              className={`${
                "navbar-link nav-link " +
                (activeLink === "projects" ? "active" : "")
              }`}
              onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </Link>
            <Link
              to={`/todos`}
              className={`${
                "navbar-link nav-link " +
                (activeLink === "todos" ? "active" : "")
              }`}
              onClick={() => onUpdateActiveLink("todos")}>
              Todos
            </Link>
          </Nav>
          <span className="navbar-text">
            <Social />
            <HashLink to={`/contact`}>
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
