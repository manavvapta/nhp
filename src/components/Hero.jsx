import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Background Glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="badge-dot"></span>
            RATLAM'S TRUSTED HARDWARE & PLYWOOD DESTINATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Building Better Spaces,
            <span> One Detail at a Time.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            National Hardware & Plywood Center brings quality hardware, plywood,
            laminates, architectural fittings and interior solutions together
            under one roof in <strong>Ratlam</strong>.
          </motion.p>

          <motion.p
            className="hero-story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            From everyday essentials to premium interior fittings, we help
            homeowners, architects, designers and professionals build spaces
            that feel right and last longer.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <button
              className="hero-btn primary-btn"
              onClick={() => scrollToSection("services")}
            >
              Explore Products
              <span>↗</span>
            </button>

            <button
              className="hero-btn secondary-btn"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/nationalhardwareratlam?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
                  "_blank",
                )
              }
            >
              Instagram
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img
              src="/hero-image.jpg"
              alt="National Hardware and Plywood Center Ratlam"
              className="hero-image"
            />

            <div className="image-overlay"></div>
          </div>

          {/* FLOATING CARD 1 */}
          <motion.div
            className="floating-card card-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="card-icon">✦</div>
            <div>
              <strong>Premium Hardware</strong>
              <small>Quality • Reliability</small>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            className="floating-card card-two"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="card-icon">◈</div>
            <div>
              <strong>Plywood & Laminates</strong>
              <small>Built for Better Spaces</small>
            </div>
          </motion.div>

          {/* FLOATING CARD 3 */}
          <motion.div
            className="floating-card card-three"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="location-dot"></span>
            <span>Serving Ratlam & Beyond</span>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span></span>
        Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
