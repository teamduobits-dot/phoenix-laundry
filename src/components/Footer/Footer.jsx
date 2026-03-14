import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* company brief */}
        <div className="footer-about">
          <h3>Phoenix Laundry</h3>
          <p>
            Professional laundry solutions since 2011. Trusted by hotels,
            hospitals and corporates across Pune.
          </p>
        </div>

        {/* quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#contact">Contact</a>
        </div>

        {/* social  */}
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Phoenix Laundry. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}