import React, { useState } from "react";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false); // State to track if the button is disabled

  const handleCopy = () => {
    const email = "zhizhivnieves@gmail.com";

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
    <div
      className="d-flex flex-column justify-content-between text-center"
      style={{ height: "100vh", backgroundColor: "#F2F4F8" }}
      id="contact"
    >
      {/* Main Section */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="container-fluid">
          <h6
            className=" fw-bold mb-3 responsive-h"
            style={{ fontSize: "54px", fontWeight: 700 }}
          >
            Looking for a UX/UI Designer?
          </h6>
          <p
            className="footer-text text-muted mb-4 responsive-p"
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
        </div>
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
          <button
            className="btn btn-primary px-4 h-100 responsive-p"
            onClick={handleCopy}
            disabled={isCopied} // Disable the button when copied
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
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
                href="#works"
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
