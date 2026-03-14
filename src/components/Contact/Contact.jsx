import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Get In Touch</h2>
        <p className="contact-sub">
          Reach out to us for professional laundry solutions
        </p>

        <div className="contact-grid">
          {/* ------- Left: Contact Details ------- */}
          <div className="contact-details">
            <div className="contact-line">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                Mhetre Wasti, Chikhli, Pune – 411062,
                <br />
                Maharashtra (IN)
              </p>
            </div>
            <div className="contact-line">
              <FaPhoneAlt className="contact-icon" />
              <p>+91 99223 23636</p>
            </div>
            <div className="contact-line">
              <FaEnvelope className="contact-icon" />
              <p>phoenixlaundrys@gmail.com</p>
            </div>

            {/* ✅ Updated map coordinates */}
            <iframe
              title="Phoenix Laundry Location"
              src="https://www.google.com/maps?q=18.6768830,73.7933046&z=15&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* ------- Right: Message Form ------- */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! Thank you for contacting Phoenix Laundry.");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              rows="5"
              placeholder="Tell us about your laundry requirements..."
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}