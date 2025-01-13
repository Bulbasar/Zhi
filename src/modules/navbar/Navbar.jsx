import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-5 navbar-container">
        {/* Brand Name */}
        <a className="navbar-brand fw-bold text-primary" href="#">
          <span className="fs-2 custom-logo">Z</span>
          <span className="h-100 mx-2 text-dark">Zhizhi Nieves</span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Navbar Links and Right-Aligned Button */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <a
                className="nav-link text-dark"
                style={{ fontWeight: 500 }}
                href="#work"
              >
                Work
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link text-dark"
                style={{ fontWeight: 500 }}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link text-dark"
                style={{ fontWeight: 500 }}
                href="#resume"
              >
                Resume
              </a>
            </li>
          </ul>
          <a
            className="contactBtn btn btn-primary text-white px-3"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
