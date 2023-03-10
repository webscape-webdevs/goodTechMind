import React from "react";
import "./about.css";
import AboutImage from "../../../sampleImages/aboutSection.png";

function About() {
  return (
    <div className="landingPage-about">
      <div className="landingPage-about-image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="landingPage-about-text">
        <div className="landingPage-about-text-title">
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>About</span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f" }}>Us</span>
        </div>
        <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "40px", color: "var(--para-color)" }}>
          We are the team of experienced and expert professionals working since for the long time in this industry. We are obsessives to deliver the best, extreme pragmatic to our work and over
          curious to meet with the newer challenges. With a notion to provide the best output and procure good rating from our clients.
        </span>
        <div className="landingPage-hero-exploreButton">
          <span>Know More</span>
        </div>
      </div>
    </div>
  );
}

export default About;
