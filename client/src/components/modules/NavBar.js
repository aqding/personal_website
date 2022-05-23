import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="titles">
        Home
      </Link>
      <Link to="/about" className="titles">
        About Me
      </Link>
      <Link to="/experience" className="titles">
        Experience
      </Link>
      <Link to="/projects" className="titles">
        Projects
      </Link>
    </div>
  );
};

export default NavBar;
