import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import workImg1 from "../../assets/Project-1/work-1.png";
import workImg2 from "../../assets/Project-2/work-1.png";
import workImg3 from "../../assets/Project-3/work-1.png";

const Project2 = () => {
  const { id } = useParams(); // Get the ID from the URL

  const contentArray = [
    {
      id: "1",
      title: "Enhanced the HRIS for a more efficient and intuitive workflow.",
      description:
        "I enhanced the company's HRIS by refining its interface and simplifying workflows, making it easier for employees and administrators to navigate and manage tasks efficiently.",
      image: workImg1,
      company: "Slashtech Solutions",
      industry: "Information Technology",
      timeline: "Jul - Sep 2023",
      platform: "Web App",
      role: "Product Designer",
    },
    {
      id: "2",
      title: "Developed a CMS to enable the company’s upcoming market launch.",
      description:
        "I developed a content management system to simplify content creation and management, supporting the company’s successful market launch.",
      image: workImg2,
      company: "Slashtech Solutions",
      industry: "Information Technology",
      timeline: "Jul - Aug 2023",
      platform: "Web App",
      role: "Product Designer",
    },
    {
      id: "3",
      title: "Customized the HRIS to align with business needs and branding.",
      description:
        "I customized the HRIS with additional features and enhancements tailored to the client’s specific needs, improving employee management and operational processes.",
      image: workImg3,
      company: "Infinity Eight",
      industry: "Trading & Marketing",
      timeline: "Oct - Nov 2023",
      platform: "Web App",
      role: "Product Designer",
    },
  ];

  // Find the content based on the ID
  const projectContent = contentArray.find((content) => content.id === id);

  if (!projectContent) {
    return <div>Project not found</div>;
  }

  return (
    <section
      className="container-fluid min-vh-100 py-2 project-section"
      style={{ marginTop: "80px", padding: "0 24px" }}
    >
      <div
        className="hero-container d-flex flex-column align-items-center project-container"
        style={{ padding: "80px 164px" }}
      >
        <div
          className="d-flex flex-column project-work-card"
          style={{ width: "1136px" }}
        >
          <div
            className="project-work-title-card"
            style={{ width: "882px", marginBottom: "80px" }}
          >
            <a
              href="/#works"
              style={{ textDecoration: "none", fontSize: "16px" }}
              className="a-link"
            >
              <i className="bx bx-chevron-left"></i> <span>All works</span>
            </a>

            <h6
              className="h-primary-color mt-2"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "64px",
                marginTop: "24px",
              }}
            >
              {projectContent.title}
            </h6>

            <p
              className="text-start p-text-muted "
              style={{ fontSize: "20px", lineHeight: "34px" }}
            >
              {projectContent.description}
            </p>
          </div>

          <div
            className="project-work-img-container"
            style={{ marginBottom: "80px" }}
          >
            <img
              src={projectContent.image}
              className="img-fluid"
              style={{ minHeight: "850px" }}
              alt="Hero Work Image"
            />
          </div>

          <div className="project-work-overview border shadow d-flex flex-row justify-content-between">
            <div>
              <p
                className="p-text-muted"
                style={{ marginBottom: "10px", fontSize: "14pxvh" }}
              >
                Company
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.company}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{ marginBottom: "10px", fontSize: "14pxvh" }}
              >
                Industry
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.industry}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{ marginBottom: "10px", fontSize: "14pxvh" }}
              >
                Timeline
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.timeline}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{ marginBottom: "10px", fontSize: "14pxvh" }}
              >
                Platform
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.platform}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{ marginBottom: "10px", fontSize: "14pxvh" }}
              >
                Role
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.role}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
