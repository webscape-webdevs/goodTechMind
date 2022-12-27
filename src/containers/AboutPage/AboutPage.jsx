import React, { useState } from "react";
import "./aboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfilePic from "../../sampleImages/dummyProfile.png";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Facebook from "../../sampleImages/facebook.png";
import Instagram from "../../sampleImages/instagram.png";
import Twitter from "../../sampleImages/twiter.png";
import LinkedIn from "../../sampleImages/linkedin.png";

function AboutPage({ theme, setTheme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log("formSubmitted");
  };
  return (
    <div className="about">
      <Navbar theme={theme} />
      <div className="about-content">
        <div className="about-section1">
          <div className="about-section1-directorMessage">
            <div style={{ paddingLeft: "20px" }}>
              <img style={{ width: "250px", paddingRight: "40px" }} src={ProfilePic} alt="" />
            </div>
            <div style={{ paddingRight: "30px", textAlign: "justify" }}>
              <h1 style={{ color: "#fca61f", fontFamily: "helvetica", fontSize: "30px" }}>Director Message</h1>
              <p style={{ color: "var(--para-color)", fontFamily: "helvetica", fontSize: "25px" }}>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well,</p>
            </div>
          </div>
          <div className="about-section1-companyOverview">
            <h1 style={{ color: "#fca61f", fontFamily: "helvetica", fontSize: "30px" }}>Company Overview</h1>
          </div>
        </div>

        {/* -------------------Section 2--------------------------- */}
        <div className="about-section2">
          <div className="about-section2-statsCounter">
            <div className="statsCounter-circle">
              <div className="statsCounter-circleWhite">
                <h1>200+</h1>
              </div>
            </div>
            <h1>Clients</h1>
          </div>

          <div className="about-section2-statsCounter">
            <div className="statsCounter-circle">
              <div className="statsCounter-circleWhite">
                <h1>2000+</h1>
              </div>
            </div>
            <h1>PROJECTS</h1>
          </div>

          <div className="about-section2-statsCounter">
            <div className="statsCounter-circle">
              <div className="statsCounter-circleWhite">
                <h1>10+</h1>
              </div>
            </div>
            <h1>CONTINENTS COVERED </h1>
          </div>

          <div className="about-section2-statsCounter">
            <div className="statsCounter-circle">
              <div className="statsCounter-circleWhite">
                <h1>100%</h1>
              </div>
            </div>
            <h1>SUCCESS RATE </h1>
          </div>

          <div className="about-section2-statsCounter">
            <div className="statsCounter-circle">
              <div className="statsCounter-circleWhite">
                <h1>200+</h1>
              </div>
            </div>
            <h1>PROJECTS OVER $15K BUDGET</h1>
          </div>
        </div>

        {/* -------------------Section 3--------------------------- */}
        <div className="about-section3">
          <div className="about-section3-title">
            <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f", paddingBottom: "25px" }}>Get </span>
            <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--para-color)", paddingBottom: "25px" }}>In </span>
            <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f", paddingBottom: "25px" }}>Touch </span>
            <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--para-color)", paddingBottom: "25px" }}>!! </span>
          </div>

          <div className="about-section3-content">
            <div className="about-section3-map"></div>
            <div className="about-section3-contactForm">
              <div className="aboutPage-contactUs-container-right">
                <form className="aboutPage-contactForm">
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
            <div className="about-section3-communicationDetails">
              <div className="aboutPage-contactUs-container-left">
                <div className="aboutPage-contactUs-container-left-text">
                  <div className="aboutPage-contactUs-container-left-text-content">
                    <MdLocationPin size="80" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
                    <span style={{ textAlign: "justify", fontFamily: "helvetica", fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>
                      Good Tech Mind, Xyzasd 12, Apt xyzads xyzads, Loream Road, Loream City, Loream State, India -42000
                    </span>
                  </div>
                  <div className="aboutPage-contactUs-container-left-text-content">
                    <IoMdCall size="40" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
                    <span style={{ textAlign: "justify", fontFamily: "helvetica", fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>+91 745 481 1584</span>
                  </div>
                  <div className="aboutPage-contactUs-container-left-text-content">
                    <MdEmail size="40" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
                    <span style={{ textAlign: "justify", fontFamily: "helvetica", fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>xyzTest@gmail.com</span>
                  </div>
                </div>
                <div className="aboutPage-contactUs-container-left-socials">
                  <img style={{ width: "70px", height: "70px" }} src={Facebook} alt="" />
                  <img style={{ width: "70px", height: "70px" }} src={Instagram} alt="" />
                  <img style={{ width: "70px", height: "70px" }} src={Twitter} alt="" />
                  <img style={{ width: "70px", height: "70px" }} src={LinkedIn} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
