import React, { useState, useEffect } from "react";
import resume from "../../../Zhizhi_Maro_Nieves.pdf";

const Hero2 = () => {
  return (
    <section
      className="container-fluid min-vh-100 py-2 hero-section"
      style={{ marginTop: "8.5vh", padding: "0 24px" }}
    >
      <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center ">
        <div
          className="hero-card d-flex flex-column align-items-center "
          style={{ width: "976px", minHeight: "386px" }}
        >
          <div
            className="d-flex flex-row align-items-center"
            style={{ width: "778px", marginBottom: "32px" }}
          >
            <h6
              className="h-primary-color"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "130%",
              }}
            >
              <span>Crafting designs </span>
              <br />
              <span>
                that prioritize{" "}
                <span style={{ color: "#0073E6" }}>user needs</span>
              </span>
            </h6>
          </div>
          <div className="w-100" style={{ marginBottom: "56px" }}>
            <p
              className="p-text-muted"
              style={{ fontSize: "24px", lineHeight: "34px" }}
            >
              Hi, I’m Zhizhi Maro, an IT graduate with a well-rounded foundation
              in UX/UI design, dedicated to creating user-centered solutions for
              real-world challenges.
            </p>
          </div>

          <div className="d-flex flex-row gap-3">
            <button className="primaryBtn">Get in Touch</button>
            <button className="secondaryBtn">View Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
