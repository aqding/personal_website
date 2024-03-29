import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./About.css";

const IM_THRES = 1150;

const About = () => {
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
            systems engineering — specifically distributed systems and computer systems security.
            Outside of academics, I am a part of MIT's Poker Club and Asian Dance Team, co-founded
            the Collegiate Series of Poker, and am also interested in longboarding, reading, and
            cooking.
          </p>
          <p className="box">
            Check out the rest of the website to see what else I'm involved with and what I've been
            working on!
          </p>
        </div>
      </div>
      {showIm ? (
        <img
          src="https://s3.amazonaws.com/allenqding.com/images/me2.png"
          className="meContainer animate-about-appear-fast"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default About;
