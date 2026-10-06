import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Top Footer */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>NATIONAL</span>
              <strong>HARDWARE</strong>
              <small>& PLYWOOD</small>
            </div>

            <p>
              Quality hardware, plywood and modern interior solutions
              for homes, offices and commercial spaces.
            </p>

            <div className="footer-socials">
  <a
    href="https://www.instagram.com/nationalhardwareratlam?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    IG
  </a>

  <a
    href="https://www.facebook.com/share/19VYKs3mjk/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    FB
  </a>

  <a
    href="https://wa.me/8451091441"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    WA
  </a>
</div>
          </div>


          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>


          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#services">Door Hardware</a>
            <a href="#services">Door Locks</a>
            <a href="#services">Plywood & Boards</a>
            <a href="#services">Digital Locks</a>
          </div>


          {/* Contact */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <div className="contact-item">
              <span className="contact-icon">L</span>

              <p>
                Opposite Sajjan Mill Gate,
                <br />
                Ratlam, Madhya Pradesh 
              </p>
            </div>

            <div className="contact-item">
              <span className="contact-icon">P</span>

              <a href="tel:+91 8451091441">
                +91 84510 91441
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">@</span>

              <a href="mailto:info@nationalhardware.com">
                nationalhardwareandplywood@gmail.com
              </a>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} National Hardware & Plywood.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">website by</a>
            <a href="#">socialpillars.in</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;