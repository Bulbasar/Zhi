import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/logo.png";
import resume from "../../../ZhizhiNieves_Resume_2025.pdf";

import logo from "../../assets/z-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    if (!isOpen) {
      // Opening the sidebar
      setIsOpen(true);
      setIsAnimating(true);
    } else {
      // Closing the sidebar - start animation first
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === "/") {
        const sections = ["works", "contact"];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection || "");
      }
    };

    const pathname = window.location.pathname;
    if (pathname === "/about") {
      setActiveSection("about");
    } else if (pathname.includes("resume")) {
      setActiveSection("resume");
    } else if (pathname === "/" && window.location.hash === "#works") {
      setActiveSection("works");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation styles
  const slideInStyle = {
    animation: isAnimating
      ? "slideIn 0.3s ease forwards"
      : "slideOut 0.3s ease forwards",
  };

  const slideInStyle2 = {
    animation: isAnimating
      ? "slideIn 0.4s ease forwards"
      : "slideOut 0.4s ease forwards",
  };

  const slideInStyle3 = {
    animation: isAnimating
      ? "slideIn 0.5s ease forwards"
      : "slideOut 0.5s ease forwards",
  };

  const slideInStyle4 = {
    animation: isAnimating
      ? "slideIn 0.6s ease forwards"
      : "slideOut 0.6s ease forwards",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white w-100"
      style={{ position: "fixed", zIndex: 100, top: 0, height: "80px" }}
    >
      <div className="container-fluid navbar-container">
        {/* Brand Name */}
        <a
          className="navbar-brand fw-bold text-primary navbar-slide-down-logo"
          href="/"
        >
          <span className="fs-1 custom-logo">
            <img src={logo} alt="Logo" style={{ width: "40px" }} />
          </span>
          <span
            className="h-100 text-dark custom-logo-p h-primary-color"
            style={{ fontSize: "20px", fontWeight: 600, marginLeft: "12px" }}
          >
            Zhimaro
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler navbar-slide-down-menu1"
          type="button"
          onClick={toggleSidebar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Default Navbar Links for larger screens */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav mx-auto" style={{ marginTop: "0.5rem" }}>
            <li className="nav-item mx-3 navbar-slide-down-menu1">
              <a
                className={`nav-link bar-links position-relative ${
                  activeSection === "works" ? "active" : ""
                }`}
                href="/#works"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Work
              </a>
            </li>
            <li className="nav-item mx-3 navbar-slide-down-menu2">
              <a
                className={`nav-link bar-links position-relative ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="/about"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-3 navbar-slide-down-menu3">
              <a
                className={`nav-link bar-links position-relative ${
                  activeSection === "resume" ? "active" : ""
                }`}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Resume
              </a>
            </li>
          </ul>
          <a
            className="contactBtn btn btn-primary text-white navbar-slide-down-menu4"
            href="/about"
          >
            Get in touch
          </a>
        </div>

        {/* Sidebar for mobile view */}
        <div
          className={`sidebar ${isOpen ? "active" : ""} ${
            isAnimating ? "animating" : ""
          }`}
          ref={sidebarRef}
        >
          <span
            className="close-btn btn fs-1"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isAnimating ? "rotate(0deg)" : "rotate(90deg)",
              opacity: isAnimating ? 1 : 0,
            }}
          >
            &times;
          </span>

          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <ul className="navbar-nav text-center">
              <li
                className="nav-item sidebar-links"
                style={isOpen ? slideInStyle : {}}
              >
                <a
                  className={`nav-link position-relative ${
                    activeSection === "works" ? "text-primary" : "text-dark"
                  }`}
                  href="/#works"
                  onClick={toggleSidebar}
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  Work
                </a>
              </li>
              <li
                className="nav-item sidebar-links"
                style={isOpen ? slideInStyle2 : {}}
              >
                <a
                  className={`nav-link position-relative ${
                    activeSection === "about"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                  href="/about"
                  onClick={toggleSidebar}
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  About
                </a>
              </li>
              <li
                className="nav-item sidebar-links"
                style={isOpen ? slideInStyle3 : {}}
              >
                <a
                  className={`nav-link position-relative ${
                    activeSection === "resume"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleSidebar}
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item mt-3" style={isOpen ? slideInStyle4 : {}}>
                <a
                  className="primaryBtnNav"
                  href="/about"
                  onClick={toggleSidebar}
                  style={{ textDecoration: "none" }}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideOut {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }


          .sidebar.active {
            transform: translateX(0);
          }
          
          .sidebar.animating {
            transition: transform 0.3s ease;
          }

          .bar-links {
            transition: color 0.3s ease;
          }

          .bar-links.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #0d6efd;
            transform: scaleX(1);
            transition: transform 0.3s ease;
          }

          .bar-links::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #0d6efd;
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .bar-links:hover::after {
            transform: scaleX(1);
          }

          .close-btn {
            background: none;
            border: none;
            color: #333;
            cursor: pointer;
            padding: 0.5rem;
          }

          .close-btn:hover {
            color: #0d6efd;
          }

          @media (max-width: 991px) {
            .navbar-container {
              padding: 0 1rem;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
