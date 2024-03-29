import React, { useState, useEffect } from "react";
import NotFound from "./pages/NotFound.js";
import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Experience from "./pages/Experience.js";
import Projects from "./pages/Projects.js";
import Activities from "./pages/Activities.js";
import { Link, Outlet } from "react-router-dom";
import "../utilities.css";
import "./App.css";
import NavBar from "./modules/NavBar.js";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <>
      <div className="navBarHolder">
        <NavBar></NavBar>
        <Outlet />
      </div>
    </>
  );
};

export default App;
