import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Projects.css";
import ProjectCard from "../modules/ProjectCard.js";
import demo from "../../images/demo.mp4";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const Projects = () => {
  let demoDiv = (
    <video
      controls
      src={demo}
      type="video/mp4"
      autoPlay
      muted
      loop
      width="100%"
      height="100%"
    ></video>
  );

  const vc_link =
    "https://drive.google.com/file/d/19aUxK3ouqxv-_Kf_lMvr-fgdmWmigR5b/view?usp=sharing";

  const vc_content = (
    <span>
      <p>
        Machine learning model that automatically colors black and white videos. Built off of a
        model that colorizes images combined with techniques that improve temporal color stability
        between frames. You can read the paper{" "}
        <a href={vc_link} className="undoLink">
          here
        </a>
        .
      </p>
    </span>
  );

  return (
    <div className="backgroundProjects">
      <div className="superContainer">
        <div className="contentContainerProj">
          <ProjectCard title="Video Colorizer" img={demoDiv} content={vc_content} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
