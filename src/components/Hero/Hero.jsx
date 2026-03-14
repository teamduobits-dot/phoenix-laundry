import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../../assets/hero.png";
import { FaCircleCheck, FaPhone } from "react-icons/fa6";

// motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  // Smooth scroll to the Contact section
  const handleQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15, ease: "easeOut" }}
      >
        {/* ---------- LEFT TEXT ---------- */}
        <motion.div
          className="hero-content"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            <span className="blink-dot"></span>
            Serving Clients Since 2011
          </span>

          <h1 className="hero-title">
            Professional <br />
            Laundry Solutions <br />
            You Can Trust
          </h1>

          <p className="hero-sub">
            Premium laundry services for Hotels, Hospitals &amp; Corporates
            across Pune. Experience quality, reliability and efficiency with
            every wash.
          </p>

          {/* ---------- POINTS ---------- */}
          <ul className="hero-points">
            <li>
              <FaCircleCheck className="icon" />
              <span>ISO Certified Facility</span>
            </li>
            <li>
              <FaCircleCheck className="icon" />
              <span>Same‑Day Service Available</span>
            </li>
            <li>
              <FaCircleCheck className="icon" />
              <span>14+ Years of Excellence</span>
            </li>
          </ul>

          {/* ---------- BUTTONS ---------- */}
          <div className="hero-btns">
            <button className="btn-orange" onClick={handleQuoteClick}>
              Get a Quote →
            </button>
            <button
              className="btn-outline"
              onClick={() => (window.location.href = "tel:+918047852213")}
            >
              <FaPhone style={{ marginRight: "6px" }} />
              Call Now
            </button>
          </div>
        </motion.div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <motion.div
          className="hero-imgbox"
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImg} alt="Neatly folded laundry" />

          <motion.div
            className="floating-card top"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="count-orange">500+</span>
            <span className="count-blue">Happy Clients</span>
          </motion.div>

          <motion.div
            className="floating-card bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="count-orange">14+</span>
            <span className="count-blue">Years Experience</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}