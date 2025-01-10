import React from "react";
import showcaseImg from "../../assets/showcase.png";

const Showcase = () => {
  return (
    <section className="container p-4 d-flex align-items-center">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="display-4 mb-3" style={{ fontWeight: 500 }}>
            Hello, I'm
            <br />
            Zhizhi Nieves
          </h1>
          <p className="lead text-muted mb-4 fs-5">
            An IT graduate with a well-rounded foundation in UX/UI design,
            dedicated to crafting user-centered solutions that address various
            real-world challenges.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary px-5 pt-3 pb-3">
              Contact Me
            </button>
            <button className="btn btn-outline-primary px-4 pt-3 pb-3">
              View Resume
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={showcaseImg}
            alt="Developer illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
