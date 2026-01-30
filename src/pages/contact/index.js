import React, { useEffect } from "react";
import GetinTouch from "../../com/footer/GetInTouch";
import { Helmet } from "react-helmet-async";

function Contact() {
  useEffect(() => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="contact">
      <Helmet>
        <title>Muhammad Medhat – Senior WordPress Developer | Contact Me</title>
        <meta
          name="description"
          content="Senior WordPress Developer with 15+ years experience. Custom themes, plugins, WooCommerce, and performance optimization."
        />
      </Helmet>
      <GetinTouch label="contact me" />
    </div>
  );
}
export default Contact;
