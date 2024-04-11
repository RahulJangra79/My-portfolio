import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-contact-me">
          <h2>CONTACT ME</h2>
          <input className="contact-inputbox" type="mail" placeholder="Name" required></input>
          <input className="contact-inputbox" type="text" placeholder="E-mail" required></input>
          <input className="contact-inputbox" type="text" placeholder="Subject" required></input>
          <textarea className="contact-inputbox message" placeholder="Message"></textarea>
          <button className="contact-submit-button">SUBMIT</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
