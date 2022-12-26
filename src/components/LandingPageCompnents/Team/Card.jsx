import React from "react";
import "./card.css";

function Card({ props }) {
  return (
    <div className="card">
      <div className="card-feedbackButtons"></div>
      <div className="card-img">
        <img src={props.image} alt="" />
      </div>
      <div className="card-text">
        <h1>{props.name}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
