
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectDetails from "./sections/main/ProjectDetails.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);