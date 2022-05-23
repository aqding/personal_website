import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Event.css";

const Event = ({ event, descrip, date, loc }) => {
  let ret;
  if (loc === undefined) {
    ret = <div className="date">{date}</div>;
  } else {
    ret = (
      <div>
        <div className="date"> {loc}</div>
        <div className="loc">{date}</div>
      </div>
    );
  }
  return (
    <div className="eventContainer">
      <div className="eventContentContainer">
        <div className="event"> {event} </div>
        <div className="descrip">{descrip}</div>
      </div>
      {ret}
    </div>
  );
};

export default Event;
