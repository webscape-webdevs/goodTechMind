import React from "react";
import "./hero.css";
import HeroImage from "../../../sampleImages/digital-platform-main-banner.png";

export default function Hero() {
  return (
    <div className="landingPage-hero">
      <div className="landingPage-hero-text">
        <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "80px", color: "var(--main-heading)" }}>Welcome To </span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "75px", paddingTop: "10px", color: "var(--main-heading)" }}>Good Tech Mind !!</span>
        <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "40px", color: "var(--para-color)" }}>
          Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
          development, producting the Quality work Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of
          experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and development, producting the Quality work
        </span>
        <div className="landingPage-hero-exploreButton">
          <span>Let's Explore</span>
        </div>
      </div>
      <div className="landingPage-hero-image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
}
