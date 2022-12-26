import React from "react";
import "./team.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import Pic from "../../../sampleImages/dummyProfile.png";

function Team() {
  const teamMember = {
    image: Pic,
    name: "Team Member",
    text: "Welcome To Good Tech Mind, Word from Team Member",
  };

  return (
    <div className="landingPage-team">
      <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)" }}>Meet Our Team</span>

      <div className="landingPage-team-card">
        <Card props={teamMember} />
        <Card props={teamMember} />
        <Card props={teamMember} />
        <Card props={teamMember} />
      </div>
    </div>
  );
}
export default Team;
