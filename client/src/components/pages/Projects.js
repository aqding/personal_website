import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Projects.css";
import ProjectCard from "../modules/ProjectCard.js";
import demo from "../../images/demo.mp4";
import fakenews from "../../images/fakenews.png";
import bnp from "../../images/bnp.png";
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
    <div>
      <p>
        Machine learning model that automatically colors black and white videos. Built off of a
        model that colorizes images combined with techniques that improve temporal color stability
        between frames. We introduce the idea of drawing a fraction of pixel color from that of the
        previous frame, and train models to learn these "weights" on a per pixel basis.
      </p>
      <p>
        You can read the paper{" "}
        <a href={vc_link} className="undoLink">
          here
        </a>
        .
      </p>
    </div>
  );

  const nlp_link =
    "https://drive.google.com/file/d/1R3DaiUnatgejgzVTZNP3SaFsSfSqO7ra/view?usp=sharing";

  const nlp_content = (
    <div>
      <p>
        An analysis of the robustness of different machine learning models (BERT, Bi-LSTM, SVM)
        assigned to detect Fake News. We present a fine-grained study of the current state of Fake
        News detection models and their practicality in real-life applications, and go in-depth into
        how these models are making their predictions and how we can break them using adversarial
        examples. We find that current models pick up nuanced details such as writing style to
        classify news rather than understanding the actual contents themselves, and that the lack of
        large, robust datasets results in ungeneralizable models.
      </p>
      <p>
        You can read our paper{" "}
        <a href={nlp_link} className="undoLink">
          here
        </a>
        .
      </p>
    </div>
  );

  const nlp_img = <img src={fakenews} className="fitContent" />;

  const bnp_link =
    "https://drive.google.com/file/d/1IOK4xW9T35cioAcgD13sRFYcKNUJyzFI/view?usp=sharing";

  const bnp_content = (
    <div>
      <p>
        A deep neural network that predicts changes in the clinical biomarker BNP from pairs of
        chest X-ray images to assist in the diagnosis of congestive heart failure. The results
        suggest that image models are capable of predicting changes in clinical biomarkers and can
        capture clinically meaningful image features. The performance of the models presented hold
        promise for utilizing non-imaging features as additional forms of supervision in predictive
        models that rely on chest X-ray data.
      </p>
      <p>
        You can read the paper{" "}
        <a href={bnp_link} className="undoLink">
          here
        </a>
        , which was accepted by a NeurIPS 2021 workshop!
      </p>
    </div>
  );
  const bnp_img = <img src={bnp} className="fitContent" />;

  return (
    <div className="backgroundProjects">
      <div className="superContainer">
        <div className="contentContainerProj">
          <div className="animate-proj-appear">
            <ProjectCard
              title="Assessing Changes in BNP from Chest Radiographs"
              img={bnp_img}
              content={bnp_content}
            />
          </div>
          <div className="animate-proj-appear">
            <ProjectCard title="Video Colorizer" img={demoDiv} content={vc_content} />
          </div>
          <div className="animate-proj-appear">
            <ProjectCard title="Fake News Detector" img={nlp_img} content={nlp_content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
