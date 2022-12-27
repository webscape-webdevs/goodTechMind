import React from "react";
import "./clientReviews.css";
import ClientReviewCard from "./ClientReviewCard";
import Pic from "../../../sampleImages/dummyProfile.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ClientReviews() {
  const review = {
    image: Pic,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem.",
  };

  return (
    <div className="landingPage-clientReviews">
      <div className="landingPage-clientReviews-titleSection">
        <div className="landingPage-clientReviews-title">
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Words </span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f", paddingRight: "20px" }}>From</span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Our</span>
          <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f", paddingRight: "20px" }}>Clients...</span>
        </div>
      </div>
      <div className="landingPage-clientReviews-reviewSection">
        <Carousel autoPlay="true" infiniteLoop="true" className="landingPage-clientReviews-carousel">
          <div className="landingPage-clientReviews-carousel-item">
            <ClientReviewCard props={review} />
          </div>
          <div className="landingPage-clientReviews-carousel-item">
            <ClientReviewCard props={review} />
          </div>
          <div className="landingPage-clientReviews-carousel-item">
            <ClientReviewCard props={review} />
          </div>
          <div className="landingPage-clientReviews-carousel-item">
            <ClientReviewCard props={review} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ClientReviews;
