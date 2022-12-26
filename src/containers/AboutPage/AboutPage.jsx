import React from "react";
import "./aboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePic from "../../sampleImages/dummyProfile.png";

function AboutPage() {
  return (
    <div className="about">
      <Navbar theme="dark-theme" />
      <div className="about-section1">
        <div className="about-section1-directorMessage">
          <div style={{ paddingLeft: "20px" }}>
            <img style={{ width: "250px", paddingRight: "40px" }} src={ProfilePic} alt="" />
          </div>
          <div style={{ paddingRight: "30px", textAlign: "justify" }}>
            <h1 style={{ color: "#fca61f", fontFamily: "helvetica", fontSize: "30px" }}>Director Message</h1>
            <p style={{ color: "var(--para-color)", fontFamily: "helvetica", fontSize: "30px" }}>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well,</p>
          </div>
        </div>
        <div className="about-section1-companyOverview">
          <h1 style={{ color: "#fca61f", fontFamily: "helvetica", fontSize: "30px" }}>Company Overview</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
