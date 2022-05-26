import React, { useState, useEffect } from "react";
import "./ActivityCard.css";
import "../../utilities.css";

const ActivityCard = ({ title, position, img, content, times }) => {
  return (
    <div className="activityCardContainer font2">
      <div className="activityImageContainer">{img}</div>
      <div className="activityContentContainer">
        <div className="activityTitle">{title}</div>
        {position !== undefined ? <div className="activityPosition"> {position} </div> : <></>}
        <div className="activityTimes"> {times}</div>
        <div className="activityText"> {content}</div>
      </div>
    </div>
  );
};

export default ActivityCard;
