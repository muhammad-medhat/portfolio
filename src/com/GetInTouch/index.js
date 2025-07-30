import React from "react";
import { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactInfo } from "../ContactInfo";
import { Justify } from "react-bootstrap-icons";

const GetinTouch = ({ label, msg }) => {
  const formInitialDetails = {
    userName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
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
      formDetails.userName === "" ||
      formDetails.email === "" ||
      formDetails.message === ""
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
      <>
        <h2 className="inner-title">
          <i className="fa-regular fa-address-book"></i>
          {label}
        </h2>
        <Row>
          <div className="col-8 col-12-small">
            <form ref={form} onSubmit={handleSubmit}>
              <p
                className="p-3"
                style={{
                  textAlign: "justify",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}>
                {msg}
              </p>
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    value={formDetails.userName}
                    placeholder="Full Name"
                    name="user_name"
                    onChange={(e) => onFormUpdate("userName", e.target.value)}
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    name="user_email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    value={formDetails.subject}
                    placeholder="Subject"
                    name="subject"
                    onChange={(e) => onFormUpdate("subject", e.target.value)}
                  />
                </div>
                <div className="col-12">
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

              <input
                type="submit"
                value={buttonText}
                style={{ marginTop: "1em", width: "100%" }}
              />
            </form>
          </div>
          <div className="col-4 col-12-small">
            <ContactInfo />
          </div>
        </Row>
      </>
    </div>
  );
};
GetinTouch.defaultProps = {
  label: "Get In Touch",
  msg: "Please fill out the form below to send me a message regarding hiring or any general inquiries you may have. I will get back to you as soon as possible.",
};
export default GetinTouch;
