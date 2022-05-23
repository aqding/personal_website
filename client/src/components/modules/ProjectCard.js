import React from "react";
import "../../utilities.css";
import "./ProjectCard.css";

const ProjectCard = ({ title, img, content }) => {
  return (
    <div className="cardContainerProject font2">
      <div className="contentContainerProject">
        <div className="titleProject">{title}</div>
        <div>{content}</div>
      </div>
      <div className="contentProject">{img}</div>
    </div>
  );
};

export default ProjectCard;
