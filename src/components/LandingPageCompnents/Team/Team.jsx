import React from "react";
import "./team.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pic from "../../../sampleImages/dummyProfile.png";

function Team() {
  const teamMember = {
    image: Pic,
    name: "Team Member",
    text: "Welcome To Good Tech Mind, Word from Team Member",
  };

  return (
    <div className="landingPage-team">
      <div className="landingPage-team-title">
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Meet</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Our</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f", paddingRight: "20px" }}>Team</span>
      </div>

      <div className="landingPage-team-card">
        <Swiper spaceBetween={50} slidesPerView={4} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
          <SwiperSlide>
            <Card props={teamMember} />
          </SwiperSlide>
        </Swiper>
        {/* 
        <Card props={teamMember} />
        <Card props={teamMember} />
        <Card props={teamMember} /> */}
      </div>
    </div>
  );
}
export default Team;
