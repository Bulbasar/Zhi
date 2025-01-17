import React, { useEffect } from "react";
import showcase2Img from "../../assets/showcase2.png";
import hris from "../../assets/hris.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, // animations will occur every time element comes into view
      offset: 0
    });
  }, []);

  return (
    <section
      className="container-fluid px-5 min-vh-100 d-flex align-items-center py-5 container-90 showcase-section bg-white mt-5"
      id="works"
    >
      <div className="row align-items-center showcase-container">
        <div className="container mt-5">
          <div className=" text-center">
            <h1
              className="display-4 mb-4"
              style={{ fontSize: "48px", fontWeight: 700 }}
            >
              Selected Works
            </h1>
            <p
              className="lead text-muted mb-5"
              style={{ fontSize: "20px", lineHeight: "32px" }}
            >
              These are the projects I worked on during my internship and
              part-time as a UI/UX Designer at an IT company. Each project
              highlights my design process, the challenges I faced, and the
              user-centered solutions I implemented.
            </p>
          </div>
        </div>

        <div className="container-fluid project-section">
          <div className="project-container mb-5">
            <div className="row align-items-center gy-5 mx-0">
              <div 
                className="col-12 col-lg-6 px-0" 
                data-aos="fade-right"
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
                data-aos-sm="fade-up"
              >
                <h2 className="h1 fw-bold mb-4">HRIS Redesign</h2>
                <p className="lead mb-4">
                  I redesigned the company's HRIS interface to improve usability
                  and enhance employee management, making tasks easier and more
                  efficient for both employees and administrators.
                </p>
                <a href="#" className="btn btn-outline-primary px-5 py-3">
                  View Work
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="project-container">
            <div className="row align-items-center gy-5 mx-0">
              <div 
                className="col-12 col-lg-6 ps-lg-5 order-2 order-lg-1 project-desc" 
                data-aos="fade-right"
                data-aos-sm="fade-up"
              >
                <h2 className="h1 fw-bold mb-4">CMS for Market Launch</h2>
                <p className="lead mb-4">
                  I designed a Content Management System to simplify and
                  optimize content creation and management, ensuring seamless
                  operations and supporting the company’s successful market
                  launch.
                </p>
                <a href="#" className="btn btn-outline-primary px-5 py-3">
                  View Work
                </a>
              </div>
              <div 
                className="col-12 col-lg-6 px-0 order-1 order-lg-2" 
                data-aos="fade-left"
                data-aos-sm="fade-up"
              >
                <div
                  className="position-relative project-img"
                  style={{ height: "28rem", paddingLeft: "7rem" }}
                >
                  <img
                    src={showcase2Img}
                    alt="HRIS Project"
                    className="img-fluid w-100 h-100 rounded shadow border p-2"
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
                data-aos-sm="fade-up"
              >
                <div
                  className="position-relative project-img"
                  style={{ height: "28rem", paddingRight: "7rem" }}
                >
                  <img
                    src={showcase2Img}
                    alt="HRIS Project"
                    className="img-fluid w-100 h-100 rounded shadow border p-2"
                  />
                </div>
              </div>

              <div 
                className="col-12 col-lg-6 ps-lg-5 project-desc" 
                data-aos="fade-left"
                data-aos-sm="fade-up"
              >
                <h2 className="h1 fw-bold mb-4">
                  Custom HRIS with New Features
                </h2>
                <p className="lead mb-4">
                  I customized the HRIS with additional features and
                  enhancements, tailored to the company’s client’s specific
                  needs for better employee management and improved processes.
                </p>
                <a href="#" className="btn btn-outline-primary px-5 py-3">
                  View Work
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
