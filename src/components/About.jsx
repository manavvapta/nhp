import React from "react";
import "./About.css";

const AboutUs = ({
  image = "images.jpg",
  secondaryImage = "images.jpg",
}) => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Images */}
        <div className="about-images">
          <div className="about-main-image">
            <img src={image} alt="National Hardware & Plywood" />
          </div>

          <div className="about-secondary-image">
            <img src={secondaryImage} alt="Hardware products" />
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            Built on <span>Trust.</span>
            <br />
            Backed by Quality.
          </h2>

          <p className="about-intro">
            For over 10 years, National Hardware & Plywood has been serving
            customers with quality hardware and interior solutions.
          </p>

          <p>
            From premium plywood and laminates to door hardware, locks,
            handles and other essential fittings, we bring a wide range of
            genuine products under one roof.
          </p>

          <p>
            Serving Ratlam and customers from nearby cities, our focus has
            always been simple — genuine brands, reliable quality, competitive
            pricing and service you can trust.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <strong>10+</strong>
              <span>Years of Trust</span>
            </div>

            <div className="about-highlight">
              <strong>100%</strong>
              <span>Genuine Products</span>
            </div>

            <div className="about-highlight">
              <strong>Wide</strong>
              <span>Product Range</span>
            </div>
          </div>

          <a href="#services" className="about-button">
            Explore Our Products
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

