import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/animation.css";
import "./styles/defaults.css";

// modules
import Navbar from "./modules/navbar/Navbar";
import Showcase from "./modules/showcase/Showcase";
import Project from "./modules/projects/Project";
import About from "./modules/about/About";
import Footer from "./modules/footer/Footer";

// update 3-9-25
import Hero from "./modules/hero/Hero";
import Footer2 from "./modules/footer/Footer2";

// works
import Works from "./modules/works/Works";

// updaaate 3-18-25
import Hero2 from "./modules/hero/Hero2";
import SelectedWorks from "./modules/selected works/selected-works";

// Create a new component for the home page to handle the scroll
function Home() {
  useEffect(() => {
    if (window.location.hash === "#works") {
      document.getElementById("works").scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* <Hero /> */}
      {/* <Project /> */}
      <Hero2 />
      <SelectedWorks />
    </>
  );
}

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
        </Routes>
        <Footer2 />
      </div>
    </BrowserRouter>
  </StrictMode>
);
