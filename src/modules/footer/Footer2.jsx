import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Footer2 = () => {
  const [isCopied, setIsCopied] = useState(false); // State to track if the button is disabled

  const handleCopy = () => {
    const email = "zhimaro.nieves@gmail.com";

    // Copy the email to the clipboard
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true); // Disable the button

      // Re-enable the button after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  return (
    <footer
      className="container-fluid footer-section pt-5 mt-5 min-vh-100 d-flex flex-column justify-content-around align-items-center"
      style={{ padding: "0 30px" }}
    >
      {/* UX/UI Designer Section */}
      <div className=" mb-5 w-100">
        <div
          className=" rounded-4 p-5 text-center footer-container d-flex flex-column justify-content-center align-items-center"
          style={{ background: "#EBF0F5" }}
        >
          <h6
            className="fw-bold mb-3 responsive-h"
            style={{
              fontSize: "72px",
              fontWeight: 600,
              color: "#00274D",
            }}
          >
            Looking for a UX/UI Designer?
          </h6>
          <div className="custom-padding-footer-p mb-4">
            <p className="text-muted responsive-p" style={{ fontSize: "24px" }}>
              I'm open to full-time UI/UX design opportunities. Let's connect
              and discuss how I can contribute to your team.
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <span
              className=" border px-4 py-3 bg-white border d-flex flex-row align-items-center responsive-p"
              style={{
                fontSize: "24px",
                color: "#00274D",
                fontWeight: 600,
                borderRadius: "16px",
              }}
            >
              <i className="bx bx-envelope text-secondary"></i>
              <span className="mx-2">zhimaro.nieves@gmail.com</span>
            </span>
            <button
              className="btn btn-primary px-4 py-3 responsive-p"
              style={{ fontSize: "24px", borderRadius: "16px" }}
              onClick={handleCopy}
              disabled={isCopied} // Disable the button when copied
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-100 p-1">
        <div className="row align-items-center footer-tag-container">
          {/* Logo and Brand Section */}
          <div className="col-md-4 link-1-container">
            <a
              className="navbar-brand fw-bold text-primary d-flex align-items-center"
              href="/"
            >
              <img src={logo} alt="Logo" style={{ width: "40px" }} />
              <span className="mx-2 text-dark" style={{ fontSize: "24px" }}>
                Zhimaro
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <div
              className="d-flex justify-content-center gap-3 link-2-container"
              style={{ marginLeft: "4.5rem" }}
            >
              <a
                href="/works"
                className="text-decoration-none text-secondary footer-link mx-3"
                style={{ fontWeight: 600 }}
              >
                Works
              </a>
              <a
                href="/about"
                className="text-decoration-none text-secondary footer-link mx-3"
                style={{ fontWeight: 600 }}
              >
                About
              </a>
              <a
                href="/resume"
                className="text-decoration-none text-secondary footer-link mx-3"
                style={{ fontWeight: 600 }}
              >
                Resume
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex justify-content-end gap-3 link-3-container">
              <a href="#" className="fs-2 text-secondary ">
                <i className="bx bxl-facebook footer-link"></i>
              </a>
              <a href="#" className="fs-2 text-secondary ">
                <i className="bx bxl-linkedin footer-link"></i>
              </a>
              <a href="#" className="fs-2 text-secondary ">
                <i className="bx bxl-behance footer-link"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Added as a separate row */}
        <div
          className="row mt-4 footer-right1 mb-2"
          style={{ marginLeft: "3.5rem" }}
        >
          <div className="col-12 text-center">
            <p className="mb-0 text-secondary">
              © 2025 Zhimaro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
