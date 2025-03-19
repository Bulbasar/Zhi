import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const [animate, setAnimate] = useState(false); // State to trigger animation
  const [activeSection, setActiveSection] = useState(""); // Add this new state
  const sidebarRef = useRef(null); // Create a ref for the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  useEffect(() => {
    if (isOpen) {
      setAnimate(true); // Trigger animation when sidebar opens
    } else {
      setAnimate(false); // Reset animation when sidebar closes
    }
  }, [isOpen]);

  // New effect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  // Update useEffect to handle both scroll and pathname
  useEffect(() => {
    const handleScroll = () => {
      // Only check scroll position if we're on the home page
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

    // Check pathname for about and resume pages
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

  // Inline styles for animation
  const slideInStyle = {
    animation: "slideIn 0.5s ease forwards",
  };

  const slideInStyle2 = {
    animation: "slideIn 0.8s ease forwards",
  };

  const slideInStyle3 = {
    animation: "slideIn 1.1s ease forwards",
  };

  const slideInStyle4 = {
    animation: "slideIn 1.5s ease forwards",
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
            className="h-100 mx-3 text-dark custom-logo-p"
            style={{ fontSize: "24px", fontWeight: 600 }}
          >
            Zhimaro
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler navbar-slide-down-menu1"
          type="button"
          onClick={toggleSidebar} // Change to toggle sidebar
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
                href="#resume"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Resume
              </a>
            </li>
          </ul>
          <a
            className="contactBtn btn btn-primary text-white navbar-slide-down-menu4"
            href="#contact"
          >
            Get in touch
          </a>
        </div>

        {/* Sidebar for mobile view */}
        <div
          className={`sidebar ${isOpen ? "active border" : ""}`}
          ref={sidebarRef}
        >
          {/* Close Button */}
          <span
            className="close-btn btn fs-1"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
            style={{ position: "absolute", right: "10px", top: "10px" }}
          >
            &times; {/* This represents the "X" */}
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
                  href="#resume"
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item mt-3" style={isOpen ? slideInStyle4 : {}}>
                <a
                  className="primaryBtnNav"
                  href="#contact"
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

      {/* Add keyframes for animation */}
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
            background-color: #0d6efd; /* Use your primary color here */
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
            
        `}
      </style>
    </nav>
  );
};

export default Navbar;
