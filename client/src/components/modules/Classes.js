import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Classes.css";

const Classes = () => {
  return (
    <div className="classesContainer">
      <div className="classesColumn">
        <div className="class">6.824 — Distributed Systems (G)</div>
        <div className="class">6.858 — Computer Systems Security (G)</div>
        <div className="class">6.869 — Advances in Computer Vision (G)</div>
        <div className="class">6.864 — Advanced Natural Language Processing (G) </div>
        <div className="class">6.865 — Advanced Computational Photography (G) </div>
        <div className="class">6.170 — Software Studio</div>
        <div className="class">6.046 — Design and Analysis of Algorithms</div>
        <div className="class">6.031 — Elements of Software Construction </div>
      </div>
      <div className="classesColumn">
        <div className="class">6.033 — Computer Systems Engineering </div>
        <div className="class">6.148 — Web Lab</div>
        <div className="class">6.004 — Computation Structures</div>
        <div className="class">6.036 — Introduction to Machine Learning</div>
        <div className="class">6.006 — Introduction to Algorithms</div>
        <div className="class">6.009 — Fundamentals of Programming</div>
        <div className="class">6.08 &nbsp;&nbsp;— Embedded Systems</div>
        <div className="class">6.UAT — Oral Communication</div>
      </div>
    </div>
  );
};

export default Classes;
