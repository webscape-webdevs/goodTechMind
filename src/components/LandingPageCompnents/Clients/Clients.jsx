import React from "react";
import "./clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SampleProductSlider1 from "../../../sampleImages/sampleProject1.png";
import SampleProductSlider2 from "../../../sampleImages/sampleProject2.png";
import SampleProductSlider3 from "../../../sampleImages/sampleProject3.png";
export default function Clients() {
  return (
    <div className="landingPage-clients">
      <div className="landingPage-clients-title">
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Meet</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Our</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f" }}>Clients</span>
      </div>

      <div className="landingPage-client-swiper">
        <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={SampleProductSlider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={SampleProductSlider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={SampleProductSlider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={SampleProductSlider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={SampleProductSlider2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
