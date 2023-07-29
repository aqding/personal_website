import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.js";
import Main from "./components/pages/Main.js";
import About from "./components/pages/About.js";
import Experience from "./components/pages/Experience.js";
import Activities from "./components/pages/Activities.js";
import Projects from "./components/pages/Projects.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Whoops! This cannot be found!</div>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

// allows for live updating
module.hot.accept();
