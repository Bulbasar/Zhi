import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Zhi from "../../assets/Zhizhi.png";
import resume from "../../../ZhizhiNieves_Resume_2025.pdf";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);
  return (
    <section className="container-fluid min-vh-100 py-2 about-me-section ">
      <div className="about-me-container d-flex flex-column align-items-center">
        <div className="about-me-container d-flex flex-row align-items-center justify-content-center about-me-showcase">
          <div className="about-me-card">
            <div>
              <h6
                className="h-primary-color"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                About Me
              </h6>
              <p
                className="p-text-muted text-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Hi! I’m Zhizhi Nieves, a UI/UX Designer with a background in
                Information Technology, specializing in Figma and passionate
                about crafting intuitive and meaningful digital experiences.
              </p>
              <div
                className="d-flex flex-row about-me-btn"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a
                  className="about-me-primaryBtn d-flex flex-row align-items-center justify-content-center"
                  href="/#works"
                  style={{ textDecoration: "none" }}
                >
                  View Works
                </a>
                <a
                  className="about-me-secondaryBtn"
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  View Resume
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src={Zhi} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-journey-container d-flex flex-row align-items-center justify-content-center">
        <div className="my-journey-card d-flex flex-column">
          <h6
            className="h-primary-color my-journey-title"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            My Journey
          </h6>
          <div
            className="my-journey-sentence"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <h6 className="h-primary-color">How it all started</h6>
            <p className="p-text-muted text-start">
              My journey into UI/UX design began during my thesis and capstone
              project, where I used Figma to create system projects. Those
              projects sparked my fascination with designing intuitive and
              visually engaging interfaces, inspiring me to explore UI/UX design
              further.
            </p>
          </div>
          <div
            className="my-journey-sentence"
            data-aos-delay="700"
            data-aos="fade-up"
          >
            <h6 className="h-primary-color">Gaining real-world experience</h6>
            <p className="p-text-muted text-start">
              During our OJT, I worked as a UI/UX designer intern at an IT
              company, where I gained hands-on experience through a four-month
              internship and a month of part-time work. I independently managed
              three system projects and contributed to two others, honing my
              skills in wireframing, prototyping, and user flows.
            </p>
          </div>
          <div
            className="my-journey-sentence"
            data-aos-delay="800"
            data-aos="fade-up"
          >
            <h6 className="h-primary-color">Refining my craft</h6>
            <p className="p-text-muted text-start">
              After graduation, I dedicated seven months to improving my UI/UX
              design skills, mastering Figma, and building a portfolio
              showcasing internship projects. I’m now excited to apply my skills
              to a full-time UI/UX designer role, creating intuitive digital
              solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
