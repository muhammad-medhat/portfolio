import React from "react";
import { Row, Col } from "react-bootstrap";
import { ContactInfo } from "../../com/ContactInfo";
import "./hireme.css";

function ContactEmail({
  form,
  formDetails,
  onFormUpdate,
  handleSubmit,
  buttonText,
  msg,
}) {
  return (
    <>
      <h2>Contact via Email</h2>
      <p>
        Contact me directly to discuss your idea, timeline, and the best
        approach.
      </p>
      <Row className="hire-email">
        <Col md={8} sm={12}>
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
            <Row>
              <Col md={6} sm={12}>
                <input
                  className="form-control"
                  type="text"
                  value={formDetails.userName}
                  placeholder="Full Name"
                  name="user_name"
                  onChange={(e) => onFormUpdate("userName", e.target.value)}
                />
              </Col>
              <Col md={6} sm={12}>
                <input
                  className="form-control"
                  type="email"
                  value={formDetails.email}
                  placeholder="Email"
                  name="user_email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col md={12} sm={12}>
                <input
                  className="form-control"
                  type="text"
                  value={formDetails.subject}
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => onFormUpdate("subject", e.target.value)}
                />
              </Col>
              <Col md={12} sm={12}>
                <textarea
                  className="form-control"
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  name="message"
                  onChange={(e) =>
                    onFormUpdate("message", e.target.value)
                  }></textarea>
              </Col>
            </Row>

            <input className="form-control" type="submit" value={buttonText} />
          </form>
        </Col>
        <Col md={4} sm={12}>
          <ContactInfo />
        </Col>
      </Row>
    </>
  );
}

export default ContactEmail;
