import React from "react";

const ProjectHris2 = ({ projectContent }) => {
  return (
    <>
      {/* 1 */}
      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Before</p>
        <img
          src={projectContent.showcaseImageBefore1}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-after-1">
        <p className="p-text-muted">After</p>
        <img
          src={projectContent.showcaseImageAfter1}
          alt="After Image"
          className="w-100 border shadow"
        />
      </div>

      {/* 2 */}
      <div className="project-work-show d-flex flex-row justify-content-between project-work-break-container">
        <div className="project-work-show-title">
          <h6
            className="h-primary-color h6-flex-responsive"
            style={{ fontSize: "32px", fontWeight: 600 }}
          >
            {projectContent.showcaseTitle2}
          </h6>
        </div>
        <div className="project-work-show-p">
          <p
            className="p-text-muted text-start"
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            {projectContent.showcaseParagraph2}
          </p>
        </div>
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Pakyawan - Piece Rate</p>
        <img
          src={projectContent.pakyawanImg1}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Pakyawan - Work Load</p>
        <img
          src={projectContent.pakyawanImg2}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Pakyawan - Payroll Schedule</p>
        <img
          src={projectContent.pakyawanImg3}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Pakyawan - Cash Advance</p>
        <img
          src={projectContent.pakyawanImg4}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>
    </>
  );
};

export default ProjectHris2;
