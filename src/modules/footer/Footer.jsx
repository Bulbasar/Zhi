import React from "react";

const Footer = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between text-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      {/* Main Section */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1
          className="footer-lookingFor fw-bold mb-3"
          style={{ fontSize: "77px", fontWeight: 700 }}
        >
          Looking for a UX/UI Designer?
        </h1>
        <p
          className="footer-text text-muted mb-4"
          style={{
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "32px",
            width: "678px",
          }}
        >
          I'm open to full-time UI/UX design opportunities. Let's connect and
          discuss how I can contribute to your team.
        </p>
        <div className="d-flex align-items-center gap-3 footer-email">
          <div
            className="d-flex align-items-center p-3 shadow-sm rounded border footer-email-input"
            style={{
              backgroundColor: "white",
              minWidth: "300px",
              justifyContent: "space-between",
            }}
          >
            <i className="bx bx-envelope" style={{ fontSize: "20px" }}></i>
            <span
              className="flex-grow-1 text-start mx-2"
              style={{ fontSize: "22px", fontWeight: 500 }}
            >
              zhizhivnieves@gmail.com
            </span>
          </div>
          <button className="btn btn-primary px-4 h-100">Copy</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="footer-section text-white py-3"
        style={{ height: "180px", background: "#545B74" }}
      >
        <div className="container-fluid mt-1 px-4">
          <div className="w-100 d-flex flex-row justify-content-between align-items-center footer-menu">
            <a
              className="navbar-brand fw-bold text-primary footer-logo"
              href="#"
            >
              <span className="fs-2 custom-logo text-white">Z</span>
              <span className="h-100 mx-2 text-white footer-logo-name">
                Zhizhi Nieves
              </span>
            </a>
            <div className=" d-flex flex-row mt-2 footer-menu-text">
              <a
                href=""
                className="mx-4 text-white"
                style={{ textDecoration: "none" }}
              >
                Work
              </a>
              <a
                href=""
                className="mx-4 text-white"
                style={{ textDecoration: "none" }}
              >
                About
              </a>
              <a
                href=""
                className="mx-4 text-white"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </div>
            <div className=" d-flex flex-row mt-2 footer-menu-logo">
              <a
                href=""
                className="mx-3 text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href=""
                className="mx-3 text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href=""
                className="mx-3 text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bxl-behance"></i>
              </a>
            </div>
          </div>

          <div className="text-center mt-4 footer-rights">
            © 2025 Zhizhi Nieves. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
