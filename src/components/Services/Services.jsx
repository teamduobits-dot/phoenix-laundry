import React, { useEffect, useRef } from "react";
import "./Services.css";
import {
  FaHotel,
  FaIndustry,
  FaHospitalSymbol,
  FaUniversity,
  FaHome,
  FaTshirt,
} from "react-icons/fa";

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Only enable scroll detection on mobile screens
    if (window.innerWidth > 768) return;

    const handleScroll = () => {
      const viewCenter = window.innerHeight / 2;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewCenter - cardCenter);
        const activationRange = rect.height / 2.3; // sensitivity

        if (distance < activationRange) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <FaHotel className="service-icon" />,
      title: "Hotel Laundry",
      text: "Expert care for linens, towels, and guest uniforms used across hospitality chains.",
    },
    {
      icon: <FaHospitalSymbol className="service-icon" />,
      title: "Hospital Laundry",
      text: "Hygienic cleaning process ensuring sanitized bed sheets, uniforms, and curtains.",
    },
    {
      icon: <FaIndustry className="service-icon" />,
      title: "Industrial Laundry",
      text: "Heavy‑duty washing and maintenance for industrial uniforms and fabrics.",
    },
    {
      icon: <FaUniversity className="service-icon" />,
      title: "Hostel & PG Laundry",
      text: "Fast, reliable laundry services for hostels, PGs, and educational institutions.",
    },
    {
      icon: <FaHome className="service-icon" />,
      title: "Residential Laundry",
      text: "Regular pick‑up and delivery for homes, with superior fabric care and finishing.",
    },
    {
      icon: <FaTshirt className="service-icon" />,
      title: "Mandap & Decorator Laundry",
      text: "Specialized cleaning of decor cloths and event fabrics with same‑day turnaround.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2>Our Services</h2>
        <p className="services-sub">
          Comprehensive laundry solutions tailored for every sector
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-item"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}