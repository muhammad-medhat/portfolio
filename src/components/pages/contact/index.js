import React, { useEffect } from "react";
import GetinTouch from "../../../com/GetInTouch";

const Contact = () => {
  useEffect(() => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="contact">
      <GetinTouch label="hire me" />
    </div>
  );
};
export default Contact;
