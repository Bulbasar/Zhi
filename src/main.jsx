import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/animation.css";

// modules
import Navbar from "./modules/navbar/Navbar";
import Showcase from "./modules/showcase/Showcase";
import Project from "./modules/projects/Project";
import About from "./modules/about/About";
import Footer from "./modules/footer/Footer";

// update 3-9-25
import Hero from "./modules/hero/Hero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div
        style={{
          width: "100wv !important",
          height: "100vh !important",
          background: "#fff !important",
          fontFamily: "Inter",
        }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <Showcase /> */}
                {/* <Project /> */}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
