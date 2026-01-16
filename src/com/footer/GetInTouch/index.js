import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HireMe from "../../HireMe/HireMe";
import "./GetInTouch.scss";
import Elharefa from "../../HireMe/Elharefa";
import PeoplePerHour from "../../HireMe/PeoplePerHour";
import ContactEmail from "../../HireMe/ContactEmail";

const GetinTouch = ({ label, msg }) => {
  const formInitialDetails = {
    userName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [hireMethod, setHireMethod] = useState("elharefa");
  const hireMethodSelected = (hireMethod) => {
    setHireMethod(hireMethod);
    // alert(`hire method changed to ${hireMethod}`);
  };
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
        <div className="hire-method-section">
          <HireMe setHireMethod={hireMethodSelected} />
        </div>
        <div className="hire-show">
          {hireMethod === "email" ? (
            <ContactEmail
              form={form}
              formDetails={formDetails}
              onFormUpdate={onFormUpdate}
              handleSubmit={handleSubmit}
              buttonText={buttonText}
              msg={msg}
            />
          ) : hireMethod === "elharefa" ? (
            <Elharefa />
          ) : (
            <PeoplePerHour />
          )}
        </div>
      </>
    </div>
  );
};
GetinTouch.defaultProps = {
  label: "Get In Touch",
  msg: "Please fill out the form below to send me a message regarding hiring or any general inquiries you may have. I will get back to you as soon as possible.",
};
export default GetinTouch;
