import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import workImg from "../../assets/work1.png";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);

  return (
    <section
      className="container-fluid min-vh-100 py-2 work-section "
      style={{ marginTop: "8.5vh", padding: "0 24px" }}
    >
      <div className="work-container d-flex flex-column align-items-center text-center py-5">
        <div
          className="w-100 mt-5 work-showcase-container "
          style={{ overflow: "hidden" }}
        >
          <div className="row mx-auto custom-row ">
            <div
              className="col-sm custom-col text-start "
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-sm="fade-up"
            >
              <a
                href="/#works"
                className="nav-link d-flex flex-row align-items-center work-a"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#8F99C2",
                  marginBottom: "24px",
                }}
              >
                <i className="bx bx-chevron-left"></i>{" "}
                <span className="mx-1">All Works</span>
              </a>
              <h6
                className="work-h"
                style={{
                  fontSize: "56px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  marginBottom: "24px",
                }}
              >
                HRIS Redesign
              </h6>
              <p
                className="text-start work-p"
                style={{
                  marginBottom: "78px",
                  color: "#4E657D",
                }}
              >
                Improve usability and enhance employee management, making tasks
                easier and more efficient for both employees and
                administrators.Improve usability and enhance employee
                management, making tasks easier and more efficient for both
                employees and administrators.
              </p>

              <div className="w-100 row gap-4 work-info-tab">
                <div className="col-sm d-flex flex-column text-start">
                  <span
                    className=""
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#899EB2",
                    }}
                  >
                    Duration
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>
                    July 2023 - Oct 2023
                  </p>
                </div>
                <div className="col-sm d-flex flex-column text-start">
                  <span
                    className=""
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#899EB2",
                    }}
                  >
                    Deliverables
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>
                    Web App Design
                  </p>
                </div>
                <div className="col-sm d-flex flex-column text-start">
                  <span
                    className=""
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#899EB2",
                    }}
                  >
                    Toolstack
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>Figma</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm custom-col work-showcase-img"
              style={{ padding: "10px 0 0 50px" }}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-sm="fade-up"
            >
              <img src={workImg} alt="Project Image" className="h-100 w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
