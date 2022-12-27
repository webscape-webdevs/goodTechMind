import React from "react";
import "./clientReviewCard.css";

function ClientReviewCard({ props }) {
  return (
    <div className="clientReviewCard">
      <div className="clientReviewCard-img">
        <img src={props.image} alt="" />
      </div>
      <div className="clientReviewCard-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ClientReviewCard;
