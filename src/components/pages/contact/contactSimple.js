import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const ContactSimple = () => {
  const formInitialDetails = {
    userName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    debugger;
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    /////////////////////////////

    emailjs
      .sendForm(
        "service_s6y27bd",
        "template_55rjjjc",
        form.current,
        "W32iZXK0u86ahOjm9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    ////////////////////
    setButtonText("Send");
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <form ref={form} onSubmit={handleSubmit}>
          <Row>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.userName}
                placeholder="Full Name"
                name="user_name"
                onChange={(e) => onFormUpdate("userName", e.target.value)}
              />
            </Col>

            <Col size={12} sm={6} className="px-1">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                name="user_email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.subject}
                placeholder="Subject"
                name="subject"
                onChange={(e) => onFormUpdate("subject", e.target.value)}
              />
            </Col>
            <Col size={12} className="px-1">
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                name="message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};
