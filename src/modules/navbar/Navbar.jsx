import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const [animate, setAnimate] = useState(false); // State to trigger animation
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

  // Inline styles for animation
  const slideInStyle = {
    animation: 'slideIn 0.5s ease forwards',
  };

  const slideInStyle2 = {
    animation: 'slideIn 0.8s ease forwards',
  };

  const slideInStyle3 = {
    animation: 'slideIn 1.1s ease forwards',
  };

  const slideInStyle4 = {
    animation: 'slideIn 1.5s ease forwards',
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white w-100 shadow"
      style={{ position: "fixed", zIndex: 100, top: 0 }}
    >
      <div className="container-fluid px-5 navbar-container">
        {/* Brand Name */}
        <a
          className="navbar-brand fw-bold text-primary navbar-slide-down-logo"
          href="/"
        >
          <span className="fs-2 custom-logo">Z</span>
          <span className="h-100 mx-2 text-dark">Zhizhi Nieves</span>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3 navbar-slide-down-menu1">
              <a className="nav-link text-dark" href="/#works">Work</a>
            </li>
            <li className="nav-item mx-3 navbar-slide-down-menu2">
              <a className="nav-link text-secondary" href="/about">About</a>
            </li>
            <li className="nav-item mx-3 navbar-slide-down-menu3">
              <a className="nav-link text-secondary" href="#resume">Resume</a>
            </li>
          </ul>
          <a
            className="contactBtn btn btn-primary text-white px-3 navbar-slide-down-menu4"
            href="#contact"
          >
            Contact Me
          </a>
        </div>

        {/* Sidebar for mobile view */}
        <div className={`border sidebar ${isOpen ? "active" : ""}`} ref={sidebarRef}>
          {/* Close Button */}
          <span className="close-btn btn fs-1" onClick={toggleSidebar} aria-label="Close sidebar" style={{ position: 'absolute', right: '10px', top: '10px' }}>
            &times; {/* This represents the "X" */}
          </span>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <ul className="navbar-nav text-center">
              <li className="nav-item" style={isOpen ? slideInStyle : {}}>
                <a className="nav-link text-dark" href="/#works" onClick={toggleSidebar}>Work</a>
              </li>
              <li className="nav-item" style={isOpen ? slideInStyle2 : {}}>
                <a className="nav-link text-secondary" href="/about">About</a>
              </li>
              <li className="nav-item" style={isOpen ? slideInStyle3 : {}}>
                <a className="nav-link text-secondary" href="#resume">Resume</a>
              </li>
              <li className="nav-item" style={isOpen ? slideInStyle4 : {}}>
                <a className="contactBtn btn btn-primary text-white" href="#contact" onClick={toggleSidebar}>Contact Me</a>
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
        `}
      </style>
    </nav>
  );
};

export default Navbar;
