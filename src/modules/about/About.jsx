import React from "react";
import Zhi from "../../assets/Zhi.png";
const About = () => {
  return (
    <>
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center about-section"
        style={{ background: "#f2f4f8" }}
      >
        <h1 style={{ fontSize: "54px", fontWeight: 700 }}>About Me</h1>
      </div>
      <div className="min-vh-100 d-flex align-items-center justify-content-center container-fluid bg-white">
        <div className="row w-100">
          <div className="col-12 col-md-4">
            <div className="w-100 about-me-img">
              <img src={Zhi} alt="Zhizhi" className="img-fluid p-5" />
            </div>
          </div>
          <div className="col-12 col-md-8 p-2 d-flex flex-column justify-content-center p-5 about-me-container">
            <div className="about-me-section" style={{ marginBottom: "16px" }}>
              <h5
                style={{ fontSize: "24px", color: "#0F1C42", fontWeight: 700 }}
              >
                How it all started
              </h5>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#4E546B",
                }}
              >
                Hey there, I'm Zhizhi Nieves. I am a recent IT graduate from
                Pamantasan ng Lungsod ng Valenzuela. My journey into UI/UX
                design began with my thesis and capstone project, where using
                Figma sparked my passion for creating user-friendly designs.
              </p>
            </div>
            <div className="about-me-section" style={{ marginBottom: "16px" }}>
              <h5
                style={{ fontSize: "24px", color: "#0F1C42", fontWeight: 700 }}
              >
                Gaining real-world experience
              </h5>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#4E546B",
                }}
              >
                During our OJT, I worked as a UI/UX designer intern at an IT
                company, where I gained hands-on experience through a
                three-month internship and a month of part-time work. I
                independently managed three system projects and contributed to
                two others, honing my skills in wireframing, prototyping, and
                user flows.
              </p>
            </div>
            <div className="about-me-section" style={{ marginBottom: "16px" }}>
              <h5
                style={{ fontSize: "24px", color: "#0F1C42", fontWeight: 700 }}
              >
                Refining my craft
              </h5>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#4E546B",
                }}
              >
                After graduation, I dedicated four months to improving my UI/UX
                design skills, mastering Figma, and building a portfolio
                showcasing internship projects. I'm now excited to apply my
                skills to a full-time UI/UX designer role, creating intuitive
                digital solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
