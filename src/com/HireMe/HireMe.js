import elharefaLogo from "../../assets/md/logo-elharefa.png";
import pphLogo from "../../assets/md/pph.jpg";
import emailIcon from "../../assets/md/envelope.png";

function HireMe({ setHireMethod }) {
  const hireMeButton = ({ hireMethod, url, text, img, def }) => {
    return (
      <div className="form-check d-flex justify-content-center align-items-center ">
        <input
          className="form-check-input btn-check"
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
              style={{ maxHeight: "150px" }}
            />
          ) : null}
          {text}
        </label>
      </div>
    );
  };
  return (
    <div className="hire-method">
      <div className="hire-info">
        <h3>How would you like to hire me?</h3>
        <h4>Choose the option that works best for you.</h4>
      </div>
      <div className="hire-method-platform btn-group1">
        {hireMeButton({
          hireMethod: "elharefa",
          url: "https://www.elharefa.com/en/freelancers/p/muhammad.medhat",
          text: "ElHarefa → Hire for full project",
          img: elharefaLogo,
          def: true,
        })}
        {hireMeButton({
          hireMethod: "pph",
          url: "https://www.elharefa.com/en/freelancers/p/muhammad.medhat",
          text: "PeoplePerHour → Buy this offer",
          img: pphLogo,
        })}
        {hireMeButton({
          hireMethod: "email",
          url: "https://elharefa.com",
          text: "Email → Let’s talk",
          img: emailIcon,
        })}
      </div>
    </div>
  );
}

export default HireMe;
