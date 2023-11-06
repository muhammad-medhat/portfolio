import React from "react";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GetinTouch = () => {
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
    console.log("form", formDetails);
    setButtonText("Sending...");
    if (
      formDetails.userName == "" ||
      formDetails.email == "" ||
      formDetails.message == ""
    ) {
      showToastMessageError("Please Check your input");
    } else {
      emailjs
        .sendForm(
          "service_s6y27bd",
          "template_55rjjjc",
          form.current,
          "W32iZXK0u86ahOjm9"
        )
        .then(
          (result) => {
            console.log({ result });
            showToastMessage();
          },
          (error) => {
            console.log(error.text);
            showToastMessageError(error.text);
          }
        );
    }
    setButtonText("Send");
  };
  const showToastMessage = () => {
    toast.success("Thank you, Email Sent !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastMessageError = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </p>
        <Row>
          <div class="col-12 col-12-small">
            <form ref={form} onSubmit={handleSubmit}>
              <div class="row gtr-uniform gtr-50">
                <div class="col-6 col-12-xsmall">
                  <input
                    type="text"
                    value={formDetails.userName}
                    placeholder="Full Name"
                    name="user_name"
                    onChange={(e) => onFormUpdate("userName", e.target.value)}
                  />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    name="user_email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div class="col-12">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }></textarea>
                </div>
              </div>
              <ul class="actions">
                <li>
                  <input
                    type="submit"
                    value={buttonText}
                    style={{ marginTop: "1em" }}
                  />
                </li>
              </ul>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};
