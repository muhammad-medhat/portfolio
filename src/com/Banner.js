import { useState } from "react";
import profileImg from "../assets/img/profile-img.jpeg";
import { Link } from "react-router-dom";
import Logo from "../assets/md/logo.svg";

export const Banner = ({ handleNavigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link className="image avatar" to="/">
        <img
          className="image avatar"
          onClick={() => handleNavigation("/")}
          src={profileImg}
          alt="Muhammad Medhat"
        />
      </Link>
      <div className="capitalize">
        <img
          className=" "
          src={Logo}
          alt="Muhammad Medhat"
          style={{
            maxHeight: "6rem",
            opacity: isHovered ? 1 : 0.5,
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onClick={() => handleNavigation("/")}
        />
      </div>
    </>
  );
};
