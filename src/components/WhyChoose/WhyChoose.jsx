import React, { useEffect, useRef } from "react";
import "./WhyChoose.css";
import { FaClock, FaShieldAlt, FaUsers, FaRupeeSign } from "react-icons/fa";

export default function WhyChoose() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) return; // apply only on mobile
    
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(windowCenter - cardCenter);

        // Calculate dynamic threshold based on card height (smaller = stricter)
        const threshold = rect.height / 2.5;

        if (distance < threshold) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount for initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      icon: <FaClock className="why-icon" />,
      title: "On‑Time Delivery",
      text: "Timely pickup and delivery guaranteed with our fleet of seven vehicles ensuring punctual service every time.",
    },
    {
      icon: <FaShieldAlt className="why-icon" />,
      title: "Quality Assured",
      text: "We use premium Johnson Diversey cleaning agents to maintain top‑tier fabric care and hygiene standards.",
    },
    {
      icon: <FaUsers className="why-icon" />,
      title: "Experienced Team",
      text: "Our team of 26–50 trained professionals handles every garment with precision and consistent excellence.",
    },
    {
      icon: <FaRupeeSign className="why-icon" />,
      title: "Affordable Rates",
      text: "Get premium‑quality laundry service at transparent prices without compromising on reliability or results.",
    },
  ];

  return (
    <section id="why" className="why">
      <div className="why-inner">
        <h2>Why Choose Phoenix Laundry?</h2>
        <p className="why-sub">
          Your trusted partner for professional laundry services
        </p>

        <div className="why-grid">
          {data.map((item, i) => (
            <div
              key={i}
              className="why-item"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="why-icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}