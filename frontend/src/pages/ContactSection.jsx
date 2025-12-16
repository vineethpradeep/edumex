import React, { useEffect, useRef, useState } from "react";
import ContactCard from "../components/ContactCard";
import PageTitle from "../components/pageTitle/PageTitle";

export default function ContactSection() {
  const contentRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(500);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setMapHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <main className="main bg-light">
      <PageTitle title="Contact Us" current="Contact" />
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 align-items-stretch">
            {/* Map */}
            <div className="col-lg-6">
              <div
                className="map-wrapper rounded shadow-sm overflow-hidden h-100"
                style={{ height: mapHeight }}
              >
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=19+Mansel+Street,+Swansea,+SA1+5SG,+UK&output=embed"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6" ref={contentRef}>
              {/* Cards */}
              <div
                className="contact-cards-container mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ContactCard
                  icon="bi bi-geo-alt"
                  title="Location"
                  text="19 Mansel Street, Swansea, SA1 5SG. United Kingdom"
                />
                <ContactCard
                  icon="bi bi-envelope"
                  title="Email"
                  text="support@edumex.co.uk"
                />
                <ContactCard
                  icon="bi bi-telephone"
                  title="Call"
                  text="01792 951550"
                />
                <ContactCard
                  icon="bi bi-clock"
                  title="Open Hours"
                  text="Mon–Fri: 9AM – 6PM"
                />
              </div>

              {/* Form */}
              <div
                className="contact-form-container p-4 rounded shadow-sm bg-white"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="fw-semibold mb-2">Get in Touch</h3>
                <p className="text-muted mb-4">
                  Feel free to reach out with any queries — our team will assist
                  you as soon as possible.
                </p>

                <form className="php-email-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-lg modern-input"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg modern-input"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control form-control-lg modern-input mt-3"
                    placeholder="Subject"
                    required
                  />

                  <textarea
                    className="form-control form-control-lg modern-input mt-3"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>

                  <div className="form-submit mt-4 d-flex align-items-center justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg fw-semibold"
                    >
                      Send Message
                    </button>

                    <div className="social-links d-flex gap-3 fs-5">
                      <a href="#" className="text-muted hover-primary">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-muted hover-primary">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="text-muted hover-primary">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="text-muted hover-primary">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
