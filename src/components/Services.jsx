import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Door Locks & Security",
    description:
      "Premium locks, cylinders, deadbolts and security solutions for modern doors.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15.5" r="1" />
        <path d="M12 16.5V18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Door Hardware",
    description:
      "Door handles, hinges, closers and essential hardware for smooth functionality.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7z" />
        <path d="M10 12h6" />
        <circle cx="10" cy="12" r="1" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plywood & Boards",
    description:
      "Reliable plywood, marine boards and quality boards for residential and commercial projects.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v13H4z" />
        <path d="M4 7l4-3h12l-4 3" />
        <path d="M8 4v3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Laminates & Surfaces",
    description:
      "Stylish laminates, textures and surface solutions to add character to your interiors.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Furniture Hardware",
    description:
      "Functional and premium hardware for cabinets, drawers, wardrobes and furniture.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13" />
        <path d="M4 19h16" />
        <path d="M8 9h8M8 13h8" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Hinges & Fittings",
    description:
      "Precision hinges, channels and fittings designed for dependable everyday performance.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="12" r="4" />
        <circle cx="16" cy="12" r="4" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Digital Smart Locks",
    description:
      "Modern digital locking solutions combining convenience, technology and security.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 7h6M9 17h6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Architectural Hardware",
    description:
      "Premium architectural hardware for projects where design and performance matter.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20V7l7-4 7 4v13" />
        <path d="M9 20v-7h6v7" />
        <path d="M9 8h6" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Heading */}
        <div className="services-heading">
          <div className="services-label">
            <span></span>
            WHAT WE OFFER
          </div>

          <h2>
            Everything You Need
            <br />
            <span>Under One Roof.</span>
          </h2>

          <p>
            From premium hardware to modern security solutions, we bring quality
            products and reliable solutions for every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-bottom">
                  <span>Explore Service</span>

                  <span className="service-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div>
            <span className="services-cta-small">BUILD WITH CONFIDENCE</span>

            <h3>
              Looking for the right
              <span> hardware solution?</span>
            </h3>
          </div>

          <a
            href="https://wa.me/918451091441"
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta-button"
          >
            Get In Touch
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
