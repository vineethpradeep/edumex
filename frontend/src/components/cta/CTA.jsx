import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import {
  ctaFeatures,
  ctaStats,
  ctaFloatingCards,
} from "../../mockdata/ctaData";
import "./cta.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="cta" className="cta section light-background">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="cta-content">
              <h2>Transform Your Future with Expert-Led Online Courses</h2>
              <p>
                Join thousands of successful learners who have advanced their
                careers through our comprehensive online education platform.
              </p>

              <div className="features-list">
                {ctaFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay={300 + idx * 50}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div
                className="cta-actions"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Link to="/courses" className="btn btn-primary">
                  Browse Courses
                </Link>
                <Link to="/enroll" className="btn btn-outline">
                  Enroll Now
                </Link>
              </div>

              <div
                className="stats-row"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {ctaStats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <h3>
                      <span className="purecounter">{stat.number}</span>
                      {stat.suffix}
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="cta-image position-relative">
              <img
                src="assets/img/courses-4.webp"
                alt="Online Learning Platform"
                className="img-fluid"
              />

              {ctaFloatingCards.map((card, idx) => (
                <div
                  key={idx}
                  className="floating-element"
                  data-aos="zoom-in"
                  data-aos-delay={card.delay}
                  style={{ ...card.position, position: "absolute" }}
                >
                  <div className="card-content">
                    <i className={card.iconClass}></i>
                    <div className="text">
                      <span className="number">{card.number}</span>
                      <span className="label">{card.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
