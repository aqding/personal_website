import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./About.css";
import me from "../../images/me2.png";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const IM_THRES = 1150;

const About = ({ userId, handleLogin, handleLogout }) => {
  const [showIm, setShowIm] = useState(window.innerWidth > IM_THRES ? true : false);

  const compIm = () => {
    if (window.innerWidth > IM_THRES) {
      setShowIm(true);
    } else if (window.innerWidth <= IM_THRES) {
      setShowIm(false);
    }
  };
  window.addEventListener("resize", compIm);

  return (
    <div className="backgroundAbout font">
      <div className={showIm ? "contentContainerAboutLarge" : "contentContainerAbout"}>
        <div className="nameContainerAbout animate-about-appear-fast">Allen Ding</div>
        <div className="titleContainerAbout animate-about-appear-med">MIT Computer Science</div>
        <div className="textContainerAbout animate-about-appear-slow">
          <p className="box">
            Hello! I'm Allen, and I'm a CS student at MIT passionate about full stack engineering,
            systems, and machine learning. Outside of academics, I am a part of MIT's Poker Club and
            Asian Dance Team, co-founded the Collegiate Series of Poker, and am also interested in
            longboarding, reading, and cooking.
          </p>
          <p className="box">
            Check out the rest of the website to see what else I'm involved with and what I've been
            working on!
          </p>
        </div>
      </div>
      {showIm ? <img src={me} className="meContainer animate-about-appear-fast" /> : <></>}
    </div>
  );
};

export default About;
