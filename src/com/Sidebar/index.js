import React from "react";
import { Banner } from "../Banner";
import Social from "../social";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import Navmenu from "../NavMenu";

function Sidebar() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="inner flex flex-column justify-center align-center">
        <Banner handleNavigation={handleNavigation} />
      </div>
      <Navmenu handleNavigation={handleNavigation} />
      <footer className="flex flex-column justify-center align-center my-4">
        <Social iconsToShow={["gh", "ln", "dt", "yt"]} />
        <p>
          Copyright &copy; 2023 - {new Date().getFullYear()}. All Rights
          Reserved
        </p>
      </footer>
    </>
  );
}

export default Sidebar;
