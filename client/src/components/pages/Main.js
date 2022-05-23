import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Main.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const Main = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="background textContainer">
      <div className="mainText interiorContainer">
        <div className="bigText animate-appear-fast">Hello</div>
        <div className="smallText animate-appear-med">I'm Allen Ding</div>
      </div>
    </div>
  );
};

export default Main;
