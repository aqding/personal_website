import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Main.css";

const gmail = "https://s3.amazonaws.com/allenqding.com/images/gmail.png";
const github = "https://s3.amazonaws.com/allenqding.com/images/github.png";
const facebook = "https://s3.amazonaws.com/allenqding.com/images/facebook.png";
const linkedin = "https://s3.amazonaws.com/allenqding.com/images/linkedin.png";

const Main = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="background textContainer">
      <div className="mainText interiorContainer">
        <div className="bigText animate-appear-fast">Hello</div>
        <div className="smallText animate-appear-med">I'm Allen Ding</div>
        <div className="iconContainer animate-appear-slow">
          <a href="mailto:aqding@mit.edu" target="_blank">
            <img src={gmail} className="icon bounceGmail" />
          </a>
          <a href="https://www.facebook.com/allen.ding.397/" target="_blank">
            <img src={facebook} className="icon bounceFB" />
          </a>
          <a href="https://github.com/aqding" target="_blank">
            <img src={github} className="icon bounceGithub" />
          </a>
          <a href="https://www.linkedin.com/in/allen-d-3aab41127/" target="_blank">
            <img src={linkedin} className="icon bounceLinkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
