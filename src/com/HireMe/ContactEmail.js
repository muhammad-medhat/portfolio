import React from "react";
import { Row } from "react-bootstrap";
import { ContactInfo } from "../../com/ContactInfo";

function ContactEmail({
  form,
  formDetails,
  onFormUpdate,
  handleSubmit,
  buttonText,
  msg,
}) {
  return (
    <div>
      <h2>Contact via Email</h2>
      <p>
        Contact me directly to discuss your idea, timeline, and the best
        approach.
      </p>
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
    </div>
  );
}

export default ContactEmail;
