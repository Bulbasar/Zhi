import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

// import imgWork1 from "../../assets/selected-works-1.png";
// import imgWork1 from "../../assets/Project-1/WEBP/webp-9.webp";
import imgWork1 from "../../assets/Project-1/Thumbnail.webp";

// import imgWork2 from "../../assets/selected-works-2.png";
import imgWork2 from "../../assets/Project-2/Thumbnail.webp";

// import imgWork3 from "../../assets/selected-works-3.png";
import imgWork3 from "../../assets/Project-3/Thumbnail.webp";

const SelectedWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);
  return (
    <section
      className="selected-works-section  d-flex flex-row justify-content-center mt-5"
      id="works"
    >
      <div className="selected-works-container ">
        <div
          className="w-100 d-flex flex-column align-items-center selected-works-container-first-div"
          style={{ marginBottom: "80px" }}
        >
          <h6
            className="h-primary-color selected-works-h"
            style={{ fontSize: "48px", fontWeight: 600, marginBottom: "16px" }}
          >
            Selected Works
          </h6>

          <p
            className="text-center p-text-muted selected-works-p lato-font"
            style={{ fontSize: "20px" }}
          >
            These are the projects I worked on during my internship and
            part-time as a UI/UX Designer, showing the problems I identified,
            client needs I addressed, and the user-centered solutions I
            delivered through before-and-after comparisons.
          </p>
        </div>

        <div
          className="w-100 d-flex flex-row  align-items-center work-container-cards"
          style={{ minHeight: "460px" }}
        >
          <div
            className="work-img-container1 work-img-container d-flex flex-row align-items-center justify-content-center"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <img src={imgWork1} alt="" className="img-fluid" />
          </div>

          <div
            className=" work-text-container"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <div className="selected-work-info">
              <p
                className="p-text-muted selected-work-card-tags"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                HR TECH · WEB APP
              </p>

              <div
                className="w-100 selected-work-card-title-container"
                style={{ marginBottom: "64px" }}
              >
                <h6
                  className="h-primary-color selected-work-card-title"
                  style={{
                    fontSize: "40px",
                    lineHeight: "48px",
                    fontWeight: 600,
                  }}
                >
                  Enhanced the HRIS for a more efficient and intuitive workflow.
                </h6>
              </div>
            </div>

            <button
              style={{ textDecoration: "none" }}
              className="viewWorkSecondaryBtn"
              onClick={() => (window.location.href = "/view-work/1")}
            >
              View Work{" "}
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-1" />
            </button>
          </div>
        </div>

        <div
          className="w-100 d-flex flex-row  align-items-center work-container-cards"
          style={{ minHeight: "460px" }}
        >
          <div
            className=" work-text-container"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <div className="selected-work-info">
              <p
                className="p-text-muted selected-work-card-tags"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                MARTECH · WEB APP
              </p>

              <div
                className="w-100 selected-work-card-title-container"
                style={{ marginBottom: "64px" }}
              >
                <h6
                  className="h-primary-color selected-work-card-title"
                  style={{
                    fontSize: "40px",
                    lineHeight: "48px",
                    fontWeight: 600,
                  }}
                >
                  Developed a CMS to enable the company’s upcoming market
                  launch.
                </h6>
              </div>
            </div>

            <button
              style={{ textDecoration: "none" }}
              className="viewWorkSecondaryBtn"
              onClick={() => (window.location.href = "/view-work/2")}
            >
              View Work{" "}
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-1" />
            </button>
          </div>

          {/* <div
            className=" work-img-container d-flex flex-row align-items-center justify-content-center"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <img src={imgWork2} alt="" className="img-fluid" />
          </div> */}

          <div
            className="work-img-container d-flex flex-row align-items-center justify-content-center"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <img src={imgWork2} alt="" className="img-fluid" />
          </div>
        </div>

        <div
          className="w-100 d-flex flex-row  align-items-center work-container-cards"
          style={{ minHeight: "460px" }}
        >
          <div
            className="work-img-container3 d-flex flex-row  justify-content-center"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <img src={imgWork3} alt="" className="img-fluid" />
          </div>

          <div
            className="work-text-container"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-sm="fade-up"
          >
            <div className="selected-work-info">
              <p
                className="p-text-muted selected-work-card-tags"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                HR TECH · WEB APP
              </p>

              <div
                className="w-100 selected-work-card-title-container"
                style={{ marginBottom: "64px" }}
              >
                <h6
                  className="h-primary-color selected-work-card-title"
                  style={{
                    fontSize: "40px",
                    lineHeight: "48px",
                    fontWeight: 600,
                  }}
                >
                  Customized the HRIS to align with business needs and branding.
                </h6>
              </div>
            </div>

            <button
              style={{ textDecoration: "none" }}
              className="viewWorkSecondaryBtn"
              onClick={() => (window.location.href = "/view-work/3")}
            >
              View Work{" "}
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
