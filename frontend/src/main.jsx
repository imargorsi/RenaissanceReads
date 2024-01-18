import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheets/global.css";
import "./stylesheets/Header.css";
import "./stylesheets/Hero.css";
import "./stylesheets/Features.css";
import "./stylesheets/Information.css";
import "./stylesheets/Profile.css";
import "./stylesheets/Form.css";
import "./stylesheets/Blogpage.css";
import "./stylesheets/Library.css";
import "./stylesheets/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
