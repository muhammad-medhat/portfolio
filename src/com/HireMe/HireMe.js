// import React, { useEffect } from "react";
import PeoplePerHourWidget from "./PeoplePerHourWidget";
import elharefaLogo from "../../assets/md/logo-elharefa.png";
import emailIcon from "../../assets/md/envelope.png";

function HireMe({ setHireMethod }) {
  const hireMeButton = ({ hireMethod, url, text, img, def }) => {
    return (
      <div className="form-check d-flex justify-content-center align-items-center ">
        <input
          className="form-check-input1 btn-check"
          type="radio"
          name="hireMethod"
          id={`hireMethod-${hireMethod}`}
          onClick={() => setHireMethod(hireMethod)}
          value={hireMethod}
          data-url={url}
          defaultChecked={def && true}
        />

        <label
          className="btn btn-outline-success p-2 d-flex flex-column justify-content-center align-items-center"
          htmlFor={`hireMethod-${hireMethod}`}>
          {img ? (
            <img
              src={img}
              alt=""
              className="rounded"
              style={{ maxHeight: "40px" }}
            />
          ) : null}
          {text}
        </label>
      </div>
    );
  };
  return (
    <div className="hire-method">
      <h3>How would you like to hire me?</h3>
      <h4>Choose the option that works best for you.</h4>
      <div className="hire-method-platform">
        {hireMeButton({
          hireMethod: "elharefa",
          url: "https://www.elharefa.com/en/freelancers/p/muhammad.medhat",
          text: "Hire on Elharefa",
          img: elharefaLogo,
          def: true,
        })}
        {hireMeButton({
          hireMethod: "email",
          url: "https://elharefa.com",
          text: "send a message ",
          img: emailIcon,
        })}
        <PeoplePerHourWidget />
        {/* https://www.elharefa.com/en/freelancers/p/muhammad.medhat */}
      </div>
      <p className="d-flex flex-column">
        <h4>Not sure which one to choose?</h4>
        <ul>
          <li>ElHarefa is recommended for formal projects.</li>
          <li>Send a message via email for informal inquiries.</li>
        </ul>
      </p>
    </div>
  );
}

export default HireMe;
