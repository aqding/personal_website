import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Experience from "./pages/Experience.js";
import Projects from "./pages/Projects.js";
import Activities from "./pages/Activities.js";

import "../utilities.css";
import "./App.css";
import NavBar from "./modules/NavBar.js";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  // useEffect(() => {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registed in the database, and currently logged in.
  //       setUserId(user._id);
  //     }
  //   });
  // }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <div className="navBarHolder">
        <NavBar></NavBar>
      </div>
      <Router>
        <Main path="/" />
        <About path="/about" />
        <Experience path="/experience" />
        <Projects path="/projects" />
        <Activities path="/activities" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
