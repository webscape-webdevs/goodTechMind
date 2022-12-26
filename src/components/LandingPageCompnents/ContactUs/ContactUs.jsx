import React, { useState } from "react";
import "./contactUs.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log("formSubmitted");
  };
  return (
    <div className="landingPage-contactUs">
      <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "75px", color: "var(--main-heading)" }}>Contact Us</span>
      <div className="landingPage-contactUs-container">
        <div className="landingPage-contactUs-container-left"></div>
        <div className="landingPage-contactUs-container-right">
          <form className="contactForm">
            <div className="landingPage-contactUs-input">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.value)}></input>
            </div>
            <div className="landingPage-contactUs-input">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.value)}></input>
            </div>
            <div className="landingPage-contactUs-input">
              <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.value)}></input>
            </div>
            <div className="landingPage-contactUs-textArea">
              <textarea type="text" placeholder="Message....." value={message} rows="5" onChange={(e) => setMessage(e.value)}></textarea>
            </div>
            <div className="landingPage-contactUs-exploreButton">
              <span onClick={handleSubmit}>Submit</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
