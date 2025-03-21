import React from "react";
import { useParams } from "react-router-dom";

import project1Image1 from "../../assets/Project-1/work-1.png";
import project1Image2 from "../../assets/Project-1/work-2.png";

import project2Image1 from "../../assets/Project-2/work-1.png";
import project2Image2 from "../../assets/Project-2/work-2.png";

import project3Image1 from "../../assets/Project-3/work-1.png";
import project3Image2 from "../../assets/Project-3/work-2.png";

const Project2 = () => {
  const { id } = useParams(); // Get the ID from the URL

  const contentArray = [
    {
      id: "1",
      // hero section
      title: "Enhanced the HRIS for a more efficient and intuitive workflow.",
      description:
        "I enhanced the company's HRIS by refining its interface and simplifying workflows, making it easier for employees and administrators to navigate and manage tasks efficiently.",
      image: project1Image1,
      company: "Slashtech Solutions",
      industry: "Information Technology",
      timeline: "Jul - Sep 2023",
      platform: "Web App",
      role: "Product Designer",
      // goal section
      goalImg: project1Image2,
      goalParagraph:
        "The goal is to enhance the overall design and functionality of the HRIS system to make it more intuitive, visually consistent, and user-friendly. Through enhancing the interface, the aim is to improve accessibility, simplify workflows, and ensure that users can efficiently manage HR-related tasks with clarity and ease.",
      // requirements section
      definingTitle: "Problems",
      definingParagraph:
        "These are the key usability and design challenges I identified that impacted the interface's clarity, consistency, and user experience.",
      definingCards: [
        {
          cardId: "01",
          title: "Inconsistent UI & Visual Clutter",
          description:
            "The platform lacked a unified design, with buttons, pagination, and other elements using different styles. Overly bright colors and poor spacing made the interface feel cluttered and visually unbalanced.",
        },
        {
          cardId: "02",
          title: "Inefficient Layout & Navigation Issues",
          description:
            "Poor placement of key elements disrupted the workflow. The search bar and item count weren’t intuitive, tables had too many action buttons, and large tables crammed excessive information, causing overload.",
        },
        {
          cardId: "03",
          title: "Readability Challenges & Unclear Terminology",
          description:
            "Weak typographic hierarchy made scanning difficult. Low text contrast reduced readability, and the use of modals limited the capacity for detailed information. Unclear titles and labels caused confusion",
        },
      ],
      // solutions
      solutionTitle: "Solutions",
      solutionParagraph:
        "These are the design improvements I implemented to enhance clarity, reduce clutter, and create a more user-friendly interface.",
      solutionsCards: [
        {
          cardId: "01",
          title: "Standardizing UI  & Simplifying Filters",
          description:
            "I applied a consistent color scheme, unified button styles, and improved contrast. Filters were decluttered by removing unnecessary labels and refining spacing, creating a more cohesive and user-friendly interface.",
        },
        {
          cardId: "02",
          title: "Enhancing Workflow and Accessibility",
          description:
            'I repositioned key elements, placed the search bar where users expect it, replaced multiple action buttons with a "More" button for cleaner tables, and introduced horizontal scrolling for large tables to improve readability.',
        },
        {
          cardId: "03",
          title: "Refining Readability & Content Structure",
          description:
            "I refine text styles to establish better hierarchy, enhance contrast, and label clarity. I also replace modals with full pages for more detailed and structured content, resulting in clearer and more organized information.",
        },
      ],
    },
    {
      id: "2",
      // hero section
      title: "Developed a CMS to enable the company's upcoming market launch.",
      description:
        "I developed a content management system to simplify content creation and management, supporting the company's successful market launch.",
      image: project2Image1,
      company: "Slashtech Solutions",
      industry: "Information Technology",
      timeline: "Jul - Aug 2023",
      platform: "Web App",
      role: "Product Designer",
      // goal section
      goalImg: project2Image2,
      goalParagraph:
        "The goal is to enhance the overall design and functionality of the HRIS system to make it more intuitive, visually consistent, and user-friendly. Through enhancing the interface, the aim is to improve accessibility, simplify workflows, and ensure that users can efficiently manage HR-related tasks with clarity and ease.",
      // requirements section
      definingTitle: "Requirements",
      definingParagraph:
        "These are the client's requirements to better align the system with their branding, workflows, and operational processes.",
      definingCards: [
        {
          cardId: "01",
          title: "Branded Interface Customization",
          description: "The client wanted the HRIS...",
        },
        {
          cardId: "02",
          title: "Pakyawan Wage & Workload Management",
          description: "The client required a custom Pakyawan module...",
        },
        {
          cardId: "03",
          title: "Additional Feature",
          description: "Description for additional feature...",
        },
      ],
      // solutions
      solutionTitle: "Solutions",
      solutionParagraph:
        "These are the design improvements I implemented to enhance clarity, reduce clutter, and create a more user-friendly interface.",
      solutionsCards: [
        {
          cardId: "01",
          title: "Optimized Navigation for Better Accessibility",
          description:
            "The interface was redesigned with a top navigation bar, optimizing screen space and improving accessibility. This structure made it easier for users to navigate between modules efficiently.",
        },
        {
          cardId: "02",
          title: "Improved Layouts for Better Usability",
          description:
            "While core modules were retained, the CMS was redesigned with a new layout and improved interactions, offering better usability through clearer navigation and a more intuitive user experience.",
        },
        {
          cardId: "03",
          title: "Playlist Module for Slideshows",
          description:
            "The Playlist Module was created with customizable timing and smooth transitions for greater flexibility. These powerful features allow users to create engaging and professional slideshows with minimal effort.",
        },
      ],
    },
    {
      id: "3",
      // hero section
      title: "Customized the HRIS to align with business needs and branding.",
      description:
        "I customized the HRIS with additional features and enhancements tailored to the client's specific needs, improving employee management and operational processes.",
      image: project3Image1,
      company: "Infinity Eight",
      industry: "Trading & Marketing",
      timeline: "Oct - Nov 2023",
      platform: "Web App",
      role: "Product Designer",
      // goal section
      goalImg: project3Image2,
      goalParagraph:
        "The goal of this project was to tailor the HRIS to meet the client's unique needs by customizing its interface and functionality. This involved adapting the system's design to reflect their brand identity and incorporating new features that align with their operational processes, ensuring a cohesive and efficient user experience.",
      // requirements section
      definingTitle: "Requirements",
      definingParagraph:
        "These are the client's requirements to better align the system with their branding, workflows, and operational processes.",
      definingCards: [
        {
          cardId: "01",
          title: "Branded Interface Customization",
          description:
            "The client wanted the HRIS to reflect their brand identity by updating the interface with their official colors and design elements. They requested a more polished, modern look to create a seamless experience for employees while maintaining the platform’s familiar structure.",
        },
        {
          cardId: "02",
          title: "Pakyawan Wage & Workload Management",
          description:
            "The client required a custom Pakyawan module to handle employees paid based on output rather than fixed salaries. They needed a reliable system that could track workloads, calculate piece-rate payments, manage payroll, and handle cash advances efficiently.",
        },
      ],
      // solutions
      solutionTitle: "Customizations",
      solutionParagraph:
        "These are the modifications I implemented to enhance the system’s interface and functionality based on the client’s needs.",
      solutionsCards: [
        {
          cardId: "01",
          title: "Tailoring the UI to Match Brand Identity",
          description:
            "To align the HRIS with the client’s branding, I updated the color scheme across buttons, navigation bars, tables, and other elements. I refined shades for better contrast, ensured accessibility, and maintained a cohesive, modern, and professional look.",
        },
        {
          cardId: "02",
          title: "Building a Pakyawan Module",
          description:
            "I designed a Pakyawan module with four sub-modules: Piece Rate for pay calculation, Workload for task tracking, Pakyawan Payroll for automation, and Cash Advance for requests. This created a more efficient system for handling Pakyawan-based compensation.",
        },
      ],
    },
  ];

  // Find the content based on the ID
  const projectContent = contentArray.find((content) => content.id === id);

  if (!projectContent) {
    return <div>Project not found</div>;
  }

  return (
    <section className="container-fluid min-vh-100 py-2 project-section">
      <div className="hero-container d-flex flex-column align-items-center project-container">
        <div className="d-flex flex-column project-work-card">
          <div className="project-work-title-card">
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

          <div className="project-work-img-container">
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

      <div className="d-flex flex-column align-items-center project-work-documentation">
        <div className="project-work-goal d-flex flex-row justify-content-between">
          <div className="project-work-goal-title">
            <h6
              className="h-primary-color"
              style={{ fontSize: "32px", fontWeight: 600 }}
            >
              Goal
            </h6>
          </div>
          <div className="project-work-goal-p">
            <p
              className="p-text-muted text-start"
              style={{ fontSize: "16px", lineHeight: "24px", fontWeight: 400 }}
            >
              {projectContent.goalParagraph}
            </p>
          </div>
        </div>

        <div className="project-work-hero-img">
          <img
            src={projectContent.goalImg}
            alt="Goal Image"
            className="img-fluid w-100"
          />
        </div>

        <div className="project-work-requirements-container">
          <div className="project-work-requirements">
            <div className="w-100 d-flex flex-row justify-content-between defining-container">
              <div className="project-work-requirements-title">
                <h6
                  className="h-primary-color color-white"
                  style={{ fontSize: "32px", fontWeight: 600 }}
                >
                  {projectContent.definingTitle}
                </h6>
              </div>
              <div className="project-work-requirements-p">
                <p className="text-align-start">
                  {projectContent.definingParagraph}
                </p>
              </div>
            </div>

            <div className="w-100 d-flex flex-row justify-content-between defining-card-container">
              {projectContent.definingCards.map((definingCard, index) => (
                <div key={index} className="w-100 defining-card">
                  <h6 className="text-white">{definingCard.cardId}</h6>
                  <h6 className="text-white ">{definingCard.title}</h6>
                  <p className="text-align-start project-work">
                    {definingCard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="project-work-solutions">
            <div className="w-100 d-flex flex-row justify-content-between solutions-container">
              <div className="project-work-solutions-title">
                <h6
                  className="h-primary-color color-white"
                  style={{ fontSize: "32px", fontWeight: 600 }}
                >
                  {projectContent.solutionTitle}
                </h6>
              </div>
              <div className="project-solutions-requirements-p">
                <p className="text-align-start">
                  {projectContent.solutionParagraph}
                </p>
              </div>
            </div>
            <div className="w-100 d-flex flex-row justify-content-between solutions-card-container">
              {projectContent.definingCards.map((card, index) => (
                <div key={index} className="w-100 solutions-card">
                  <h6 className="text-white ">{card.cardId}</h6>
                  <h6 className="text-white ">{card.title}</h6>
                  <p className="text-align-start p-text-muted">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
