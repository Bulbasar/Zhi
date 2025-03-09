import React, { useState, useEffect } from "react";
// my resume
import resume from "../../../Zhizhi_Maro_Nieves.pdf";

import usability1 from "../../assets/usability1.png";
import usability2 from "../../assets/usability2.png";
import usability3 from "../../assets/usability3.png";
import usability4 from "../../assets/usability4.png";

import accessibility1 from "../../assets/accessibility1.png";
import accessibility2 from "../../assets/accessibility2.png";
import accessibility3 from "../../assets/accessibility3.png";
import accessibility4 from "../../assets/accessibility4.png";

import aesthetics1 from "../../assets/aesthetics1.png";
import aesthetics2 from "../../assets/aesthetics2.png";
import aesthetics3 from "../../assets/aesthetics3.png";
import aesthetics4 from "../../assets/aesthetics4.png";

const InteractiveWord = ({
  word,
  isActive,
  isHovered,
  onHover,
  onClick,
  onLeave,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        zIndex: 10,
        padding: "0 5px",
      }}
    >
      <span
        role="button"
        tabIndex={0}
        style={{
          color: isHovered || isActive ? "#1F75FE" : "#6C757D",
          cursor: "pointer",
          fontWeight: isActive ? 600 : 600,
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
        onMouseEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onHover();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onLeave();
        }}
      >
        {word}
      </span>
    </div>
  );
};

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("usability");
  const [hoverCategory, setHoverCategory] = useState(null);

  const categories = ["usability", "accessibility", "aesthetics"];

  // Add auto-rotation effect
  useEffect(() => {
    // Only rotate if user is not hovering
    if (!hoverCategory) {
      const interval = setInterval(() => {
        setActiveCategory((current) => {
          const currentIndex = categories.indexOf(current);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex];
        });
      }, 3000); // 3 seconds

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [hoverCategory]); // Reset interval when hover state changes

  const iconSets = {
    usability: [usability1, usability2, usability3, usability4],
    accessibility: [
      accessibility1,
      accessibility2,
      accessibility3,
      accessibility4,
    ],
    aesthetics: [aesthetics1, aesthetics2, aesthetics3, aesthetics4],
  };

  const getCurrentIcons = () => {
    if (hoverCategory) return iconSets[hoverCategory];
    return iconSets[activeCategory];
  };

  return (
    <section
      className="container-fluid min-vh-100 py-2 hero-section"
      style={{ marginTop: "11vh" }}
    >
      <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center ">
        {/* Hero Icons */}
        <div className="hero-icons overlay">
          {getCurrentIcons().map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Hero Icon ${index + 1}`}
              className={`hero-icon hero-icon-${index + 1} wave-animation`}
              style={{
                animationDelay: `${index * 0.2}s`, // Stagger the animation for each icon
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          className="col-12 col-lg-8 mx-auto hero-custom-padding overlay"
          style={{ position: "relative", zIndex: 5 }}
        >
          <h6 style={{ fontSize: "72px", fontWeight: 600 }}>
            Crafting designs that prioritize{" "}
            <InteractiveWord
              word="usability"
              isActive={activeCategory === "usability"}
              isHovered={hoverCategory === "usability"}
              onClick={() => setActiveCategory("usability")}
              onHover={() => setHoverCategory("usability")}
              onLeave={() => setHoverCategory(null)}
            />
            ,{" "}
            <InteractiveWord
              word="accessibility"
              isActive={activeCategory === "accessibility"}
              isHovered={hoverCategory === "accessibility"}
              onClick={() => setActiveCategory("accessibility")}
              onHover={() => setHoverCategory("accessibility")}
              onLeave={() => setHoverCategory(null)}
            />
            , &{" "}
            <InteractiveWord
              word="aesthetics"
              isActive={activeCategory === "aesthetics"}
              isHovered={hoverCategory === "aesthetics"}
              onClick={() => setActiveCategory("aesthetics")}
              onHover={() => setHoverCategory("aesthetics")}
              onLeave={() => setHoverCategory(null)}
            />
          </h6>
          <div className="custom-padding-p mb-5">
            <p className="text-muted" style={{ fontSize: "24px" }}>
              Hi, I'm Zhizhi Maro, an IT graduate with a well-rounded foundation
              in UX/UI design, dedicated to creating user-centered solutions for
              real-world challenges.
            </p>
          </div>
          <div className="container">
            <a
              className="contactBtn btn btn-primary text-white mb-3"
              href="#contact"
            >
              Get in touch
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contactBtn btn btn-outline-secondary text-dark mx-2 custom-border-outline mb-3"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
