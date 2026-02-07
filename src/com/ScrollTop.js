import React from "react";
import { faArrowUp, faChain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollTop() {
  const scrollTop = () => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center move-top">
      <p onClick={scrollTop}>
        Top <FontAwesomeIcon icon={faArrowUp} />
      </p>
    </div>
  );
}

export default ScrollTop;
