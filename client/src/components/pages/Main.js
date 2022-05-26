import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Main.css";

import gmail from "../../images/gmail.png";
import github from "../../images/github.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const Main = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="background textContainer">
      <div className="mainText interiorContainer">
        <div className="bigText animate-appear-fast">Hello</div>
        <div className="smallText animate-appear-med">I'm Allen Ding</div>
        <div className="iconContainer animate-appear-slow">
          <a href="mailto:aqding@mit.edu">
            <img src={gmail} className="icon bounceGmail" />
          </a>
          <a href="https://www.facebook.com/allen.ding.397/">
            <img src={facebook} className="icon bounceFB" />
          </a>
          <a href="https://github.com/aqding">
            <img src={github} className="icon bounceGithub" />
          </a>
          <a href="https://www.linkedin.com/in/allen-d-3aab41127/">
            <img src={linkedin} className="icon bounceLinkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
