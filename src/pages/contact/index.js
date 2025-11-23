import React, { useEffect } from "react";
import GetinTouch from "../../com/GetInTouch";

function Contact() {
  useEffect(() => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="contact">
      <GetinTouch label="contact me" />
    </div>
  );
}
export default Contact;
