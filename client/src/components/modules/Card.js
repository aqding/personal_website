import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Card.css";

const Card = ({ title, img, imgcss, content }) => {
  return (
    <div className="cardContainer font2">
      <div className="title">
        <img src={img} className={imgcss} />
        <p>{title}</p>
      </div>

      {content}
    </div>
  );
};

export default Card;
