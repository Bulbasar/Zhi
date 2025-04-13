import React from "react";

const ProjectHris1 = ({ projectContent }) => {
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
        <div className="project-work-show-title ">
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
        <p className="p-text-muted">Before</p>
        <img
          src={projectContent.showcaseImageBefore2}
          alt="Before Image"
          className="w-100 shadow"
          style={{ marginBottom: "24px" }}
        />
        <img
          src={projectContent.showcaseImageBefore2_1}
          alt="Before Image"
          className="w-100 border shadow"
          style={{ marginBottom: "24px" }}
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-after-1">
        <p className="p-text-muted">After</p>
        <img
          src={projectContent.showcaseImageAfter2}
          alt="Before Image"
          className="w-100 border shadow"
          style={{ marginBottom: "24px" }}
        />
        <img
          src={projectContent.showcaseImageAfter2_1}
          alt="Before Image"
          className="w-100 border shadow"
          style={{ marginBottom: "24px" }}
        />
      </div>

      {/* 3 */}

      <div className="project-work-show d-flex flex-row justify-content-between project-work-break-container">
        <div className="project-work-show-title ">
          <h6
            className="h-primary-color h6-flex-responsive
            "
            style={{ fontSize: "32px", fontWeight: 600 }}
          >
            {projectContent.showcaseTitle3}
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
            {projectContent.showcaseParagraph3}
          </p>
        </div>
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-3 d-flex flex-row justify-content-between project-work-show-img-responsive">
        <div className="d-flex flex-column w-100">
          <p className="p-text-muted">Before</p>
          <img
            src={projectContent.showcaseImageBefore3_1}
            alt="Before Image"
            className="w-100 border shadow"
          />
        </div>
        <div className="d-flex flex-column w-100">
          <p className="p-text-muted">After</p>
          <img
            src={projectContent.showcaseImageAfter3_1}
            alt="Before Image"
            className="w-100 border shadow py-2"
          />
        </div>
      </div>

      <div className="project-work-show-img w-100 works-showcase-before-1">
        <p className="p-text-muted">Before</p>
        <img
          src={projectContent.showcaseImageBefore3_2}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show-img w-100 works-showcase-after-1">
        <p className="p-text-muted">After</p>
        <img
          src={projectContent.showcaseImageAfter3_2}
          alt="After Image"
          className="w-100 border shadow"
        />
      </div>
    </>
  );
};

export default ProjectHris1;
