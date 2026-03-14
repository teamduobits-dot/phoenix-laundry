import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ➤ Hide / show navbar when scrolling (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (window.innerWidth <= 900) {
        if (currentY > lastScrollY && currentY > 100) {
          setHideNav(true); // scrolling down → hide
        } else {
          setHideNav(false); // scrolling up → show
        }
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`navbar ${hideNav ? "nav-hide" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-left">
          <img src={logo} alt="Phoenix Laundry logo" className="nav-logo" />
        </div>

        {/* Desktop Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hamburger / Close icon */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="open navigation menu"
        >
          <FaBars />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <FaTimes
              className="close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="close navigation menu"
            />

            {/* Navigation Links */}
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#infrastructure" onClick={() => setMenuOpen(false)}>
              Infrastructure
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            {/* Footer inside menu */}
            <p className="nav-copy">© Phoenix Laundry 2025</p>
          </div>
        </div>
      )}
    </header>
  );
}