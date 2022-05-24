import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Main.css";
import "./Experience.css";
import Card from "../modules/Card.js";
import Classes from "../modules/Classes.js";
import Event from "../modules/Event.js";
import school from "../../images/school.png";
import books from "../../images/books.png";
import briefcase from "../..//images/briefcase.png";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const Experience = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="backgroundExperience">
      <div className="superContainer">
        <div className="contentContainerExp">
          <div className="animate-exp-appear-fast">
            <Card
              content={
                <Event
                  event="Massachusetts Institute of Technology"
                  descrip="Candidate for B.S. in Computer Science"
                  date="2020-2024"
                  loc="Cambridge, MA"
                />
              }
              title="Education"
              img={school}
              imgcss="school"
            />
          </div>

          <div className="animate-exp-appear-med">
            <Card content={<Classes />} title="Relevant Coursework" img={books} imgcss="books" />
          </div>

          <div className="animate-exp-appear-slow">
            <Card
              content={
                <div>
                  <Event
                    event="MIT 6.148 Web Lab Instructor"
                    descrip="Taught a web development class of 250+ students including topics such as HTML, CSS, Javascript, ReactJS, nodejs,
                  as well as using databases such as MongoDB. Received a course evaluation rating of 6.7/7.0."
                    date="January 2022"
                  />
                  <Event
                    event="Reseacher at MIT CSAIL"
                    descrip="Developed neural network models to predict changes in clinical biomarkers from chest xray images.
                  Paper accepted by the Nightingale Open Science NeurIPS 2021 Workshop."
                    date="May 2021 — August 2021"
                  />
                  <Event
                    event="Researcher at MIT Media Lab"
                    descrip="Developed models to increase the efficacy of training deep neural networks through iterative weight pruning."
                    date="December 2020 — March 2021"
                  />
                </div>
              }
              title="Experience"
              img={briefcase}
              imgcss="briefcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
