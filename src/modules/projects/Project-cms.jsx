import React from "react";

const ProjectCms = ({ projectContent }) => {
  return (
    <>
      <div className="project-work-show-img w-100 works-showcase-cms-1">
        <img
          src={projectContent.showcaseImageCms1}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>

      <div className="project-work-show d-flex flex-row justify-content-between">
        <div className="project-work-show-title">
          <h6
            className="h-primary-color"
            style={{ fontSize: "32px", fontWeight: 600 }}
          >
            {projectContent.showcaseTitle}
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
            {projectContent.showcaseParagraph}
          </p>
        </div>
      </div>

      <div className="project-work-show-img w-100 works-showcase-cms-1">
        <img
          src={projectContent.showcaseImageCms2}
          alt="Before Image"
          className="w-100 border shadow"
        />
      </div>
    </>
  );
};

export default ProjectCms;
