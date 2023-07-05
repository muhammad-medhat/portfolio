import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../../assets/img/contact-img.svg";
import "animate.css";
import "./style.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
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
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={4} className="px-1">
                        <input
                          type="text"
                          value={formDetails.userName}
                          placeholder="Full Name"
                          name="user_name"
                          required
                          onChange={(e) =>
                            onFormUpdate("userName", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={4} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          name="user_email"
                          required
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={4} className="px-1">
                        <input
                          type="text"
                          value={formDetails.subject}
                          placeholder="Subject"
                          name="subject"
                          onChange={(e) =>
                            onFormUpdate("subject", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          required
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
