import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Main.css";
import "./Experience.css";
import Card from "../modules/Card.js";
import Classes from "../modules/Classes.js";
import Event from "../modules/Event.js";

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
                  date="2020-2023"
                  loc="Cambridge, MA"
                />
              }
              title="Education"
              img="https://s3.amazonaws.com/allenqding.com/images/school.png"
              imgcss="school"
            />
          </div>

          <div className="animate-exp-appear-med">
            <Card
              content={<Classes />}
              title="Relevant Coursework"
              img="https://s3.amazonaws.com/allenqding.com/images/books.png"
              imgcss="books"
            />
          </div>

          <div className="animate-exp-appear-slow">
            <Card
              content={
                <div className="experienceCardContainer">
                  <Event
                    event="Software Engineer Intern at Yext"
                    descrip="Remade internal search web app used by 1000 employees daily and improved search results using data connectors.
                    Also increased model prediction efficiency 4x by upgrading Cuda drivers, adopted by all ML teams across the company.
                    Built pipelines for automated data curating and uploading to a labeling UI and nightly model retraining.
                    "
                    date="May 2022 — August 2022"
                  />
                  {/* <Event
                    event="MIT 6.033 Computer Systems Engineering Teaching Assistant"
                    descrip="Led recitation and office hours covering operating systems, networks, distributed systems, and security. Also handled course administrative tasks."
                    date="January 2022 — Present"
                  /> */}
                  <Event
                    event="MIT 6.036 Introduction to Machine Learning Teaching Assistant"
                    descrip="Curated course material and led lab sessions/office hours covering classification, regression, reinforcement learning, trees, and clustering."
                    date="August 2022 — December 2022"
                  />
                  <Event
                    event="MIT 6.036 Introduction to Machine Learning Lab Assistant"
                    descrip="Assisted in lab sessions and office hours covering content mentioned above."
                    date="January 2022 — May 2022"
                  />
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
              img="https://s3.amazonaws.com/allenqding.com/images/briefcase.png"
              imgcss="briefcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
