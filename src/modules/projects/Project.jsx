import React, { useEffect } from "react";
import showcase2Img from "../../assets/showcase2.png";
import hris from "../../assets/hris.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);

  return (
    <section
      className="container-fluid min-vh-100 d-flex align-items-center py-5 container-90 project-section bg-white"
      id="works"
    >
      <div className="row align-items-center showcase-container">
        <div className="container mt-5">
          <div className=" text-center">
            <h6
              className="display-4 mb-4 responsive-h"
              style={{ fontSize: "72px", fontWeight: 700 }}
            >
              Selected Works
            </h6>
            <div className="custom-padding-p">
              <p
                className="lead text-muted mb-5 responsive-p"
                style={{ fontSize: "20px", lineHeight: "32px" }}
              >
                These are the projects I worked on during my internship and
                part-time as a UI/UX Designer at an IT company. Each project
                highlights my design process, the challenges I faced, and the
                user-centered solutions I implemented.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid project-card">
          <div className="project-container mb-5">
            <div className="row align-items-center gy-5 mx-0">
              <div
                className="col-12 col-lg-6 px-0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <div
                  className="position-relative project-img"
                  style={{ height: "28rem", paddingRight: "7rem" }}
                >
                  <img
                    src={showcase2Img}
                    alt="HRIS Project"
                    className="img-fluid w-100 h-100 rounded "
                  />
                </div>
              </div>

              <div
                className="col-12 col-lg-6 ps-lg-5 project-desc"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <h6 className="h1 fw-bold mb-4 responsive-h">HRIS Redesign</h6>
                <div className="tags mb-3">
                  <span
                    className="badge border me-2 p-2 rounded text-secondary"
                    style={{ background: "#F3F4F6" }}
                  >
                    HR Tech
                  </span>
                  <span
                    className="badge border me-2 p-2 rounded text-secondary mx-2"
                    style={{ background: "#F3F4F6" }}
                  >
                    Web App
                  </span>
                </div>
                <p className="lead mb-4 responsive-p">
                  I redesigned the company's HRIS interface to improve usability
                  and enhance employee management, making tasks easier and more
                  efficient for both employees and administrators.
                </p>
                <a href="#" className="btn btn-outline-secondary px-5 py-3">
                  View Work <i class="bx bx-arrow-back bx-rotate-180"></i>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="project-container position-relative">
            <div className="row align-items-center gy-5 mx-0">
              <div
                className="col-12 col-lg-6 ps-lg-5 order-2 order-lg-1 project-desc"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <h6 className="h1 fw-bold mb-4 responsive-h">
                  CMS for Market Launch
                </h6>
                <div className="tags mb-3">
                  <span
                    className="badge border me-2 p-2 rounded text-secondary"
                    style={{ background: "#F3F4F6" }}
                  >
                    MarTech
                  </span>
                  <span
                    className="badge border me-2 p-2 rounded text-secondary mx-2"
                    style={{ background: "#F3F4F6" }}
                  >
                    Web App
                  </span>
                </div>
                <p className="lead mb-4 responsive-p">
                  I designed a Content Management System to simplify and
                  optimize content creation and management, ensuring seamless
                  operations and supporting the company's successful market
                  launch.
                </p>
                <a href="#" className="btn btn-outline-secondary px-5 py-3">
                  View Work <i class="bx bx-arrow-back bx-rotate-180"></i>
                </a>
              </div>
              <div
                className="col-12 col-lg-6 px-0 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <div
                  className="position-relative project-img"
                  style={{ height: "28rem" }}
                >
                  <img
                    src={showcase2Img}
                    alt="HRIS Project"
                    className="img-fluid position-absolute"
                    style={{ right: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="project-container mb-5">
            <div className="row align-items-center gy-5 mx-0">
              <div
                className="col-12 col-lg-6 px-0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <div
                  className="position-relative project-img"
                  style={{ height: "28rem", paddingRight: "7rem" }}
                >
                  <img
                    src={showcase2Img}
                    alt="HRIS Project"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div
                className="col-12 col-lg-6 ps-lg-5 project-desc"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-sm="fade-up"
              >
                <h6 className="h1 fw-bold mb-4 responsive-h">
                  Custom HRIS with New Features
                </h6>
                <div className="tags mb-3">
                  <span
                    className="badge border me-2 p-2 rounded text-secondary"
                    style={{ background: "#F3F4F6" }}
                  >
                    HR Tech
                  </span>
                  <span
                    className="badge border me-2 p-2 rounded text-secondary mx-2"
                    style={{ background: "#F3F4F6" }}
                  >
                    Web App
                  </span>
                </div>
                <p className="lead mb-4 responsive-p">
                  I customized the HRIS with additional features and
                  enhancements, tailored to the company's client's specific
                  needs for better employee management and improved processes.
                </p>
                <a href="#" className="btn btn-outline-secondary px-5 py-3">
                  View Work <i class="bx bx-arrow-back bx-rotate-180"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
