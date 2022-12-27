import React, { useState } from "react";
import "./aboutPageContactUs.css";
import Facebook from "../../../sampleImages/facebook.png";
import Instagram from "../../../sampleImages/instagram.png";
import Twitter from "../../../sampleImages/twiter.png";
import LinkedIn from "../../../sampleImages/linkedin.png";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function AboutPageContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log("formSubmitted");
  };
  return (
    <div className="aboutPage-contactUs">
      <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingBottom: "25px" }}>Get In Touch !!</span>
      <div className="aboutPage-contactUs-container">
        <div className="aboutPage-contactUs-container-left">
          <div className="aboutPage-contactUs-container-left-text">
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdLocationPin size="65" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>
                Good Tech Mind, Xyzasd 12, Apt xyzads xyzads, Loream Road, Loream City, Loream State, India -42000
              </span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <IoMdCall size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>+91 745 481 1584</span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdEmail size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>xyzTest@gmail.com</span>
            </div>
          </div>
          <div className="aboutPage-contactUs-container-left-socials">
            <img style={{ width: "80px", height: "80px" }} src={Facebook} alt="" />
            <img style={{ width: "80px", height: "80px" }} src={Instagram} alt="" />
            <img style={{ width: "80px", height: "80px" }} src={Twitter} alt="" />
            <img style={{ width: "80px", height: "80px" }} src={LinkedIn} alt="" />
          </div>
        </div>
        <div className="aboutPage-contactUs-container-right">
          <form className="contactForm">
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="number" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-textArea">
              <textarea type="text" placeholder="Message....." value={message} rows="5" onChange={(e) => setMessage(e.value)}></textarea>
            </div>
            <div className="aboutPage-contactUs-exploreButton">
              <span onClick={handleSubmit}>Submit</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
