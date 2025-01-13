import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

// modules
import Navbar from "./modules/navbar/Navbar";
import Showcase from "./modules/showcase/Showcase";
import Project from "./modules/projects/Project";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{
        width: "100wv !important",
        height: "100vh !important",
        background: "#F2F5FA",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Navbar />
      <Showcase />
      <Project />
    </div>
  </StrictMode>
);
