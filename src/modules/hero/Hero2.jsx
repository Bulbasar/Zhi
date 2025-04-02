import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import resume from "../../../ZhizhiNieves_Resume_2025.pdf";
const Hero2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 0,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);
  return (
    <section
      className="container-fluid min-vh-100 py-2 hero-section"
      style={{ marginTop: "80px", padding: "0 24px" }}
    >
      <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center ">
        <div
          className="hero-card d-flex flex-column align-items-center "
          style={{ width: "976px", minHeight: "386px" }}
        >
          <div
            className="d-flex flex-row align-items-center hero-h-container"
            style={{ width: "778px", marginBottom: "32px" }}
          >
            <h6
              className="h-primary-color hero-h"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "130%",
              }}
              data-aos="fade-up"
            >
              <span>Crafting designs </span>
              <br />
              <span>
                that prioritize{" "}
                <span style={{ color: "#0073E6" }}>user needs</span>
              </span>
            </h6>
          </div>
          <div
            className="w-100 hero-p-container"
            style={{ marginBottom: "56px" }}
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <p
              className="p-text-muted hero-p"
              style={{ fontSize: "24px", lineHeight: "34px", fontWeight: 400 }}
            >
              Hi, I’m Zhizhi Maro, an IT graduate with a well-rounded foundation
              in UX/UI design, dedicated to creating user-centered solutions for
              real-world challenges.
            </p>
          </div>

          <div
            className="d-flex flex-row gap-3"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            <a
              className="primaryBtn"
              href="/about"
              style={{ textDecoration: "none" }}
            >
              Get in Touch
            </a>
            <a
              className="secondaryBtn"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
