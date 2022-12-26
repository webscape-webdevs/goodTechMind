import React from "react";
import "./services.css";
import AboutImage from "../../../sampleImages/aboutSection.png";

export default function Services() {
  return (
    <div className="landingPage-services">
      <div className="landingPage-services-left">
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)" }}>Our Services</span>
        <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "40px", color: "var(--para-color)" }}>
          Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
        </span>
      </div>
      <div className="landingPage-services-right">
        <div className="landingPage-services-right-firstHalf">
          <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "30px", paddingTop: "40px", color: "var(--main-heading)" }}>Dynamic Web Designs</span>
          <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "20px", color: "var(--para-color)" }}>
            Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
          </span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "30px", paddingTop: "100px", color: "var(--main-heading)" }}>24 X 7 Support</span>
          <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "20px", color: "var(--para-color)" }}>
            Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
          </span>
        </div>
        <div className="landingPage-services-right-secondHalf">
          <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "30px", paddingTop: "40px", color: "var(--main-heading)" }}>Maintenance</span>
          <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "20px", color: "var(--para-color)" }}>
            Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
          </span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "300", fontSize: "30px", paddingTop: "100px", color: "var(--main-heading)" }}>SEO</span>
          <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", paddingTop: "20px", color: "var(--para-color)" }}>
            Frontend Developer with high level of experience in web designing and development, producting the Quality work Frontend Developer with high level of experience in web designing and
          </span>
        </div>
      </div>
    </div>
  );
}
