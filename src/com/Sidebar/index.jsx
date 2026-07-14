import React from "react";
import MyInfo from "../myInfo/MyInfo";
import Social from "../social";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import Navmenu from "../NavMenu";
import Copyright from "../copyright/Copyright";

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
      <div className="myinfo ">
        <MyInfo handleNavigation={handleNavigation} />
      </div>
      <Navmenu handleNavigation={handleNavigation} />
      <footer className="flex flex-column justify-center align-center my-4">
        <Social iconsToShow={["gh", "ln", "dt", "yt"]} />
        <Copyright />
      </footer>
    </>
  );
}
export default Sidebar;
