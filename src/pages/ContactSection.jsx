import React, { useEffect, useRef, useState } from "react";
import ContactCard from "../components/ContactCard";
import PageTitle from "../components/PageTitle";

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
    <main className="main">
      <PageTitle title="Contact Us" current="Contact" />
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="contact-main-wrapper d-flex flex-wrap"
            style={{ gap: "30px", alignItems: "stretch" }}
          >
            {/* Map */}
            <div
              className="map-wrapper flex-grow-1"
              style={{
                minWidth: "300px",
                flex: "1 1 45%",
                height: mapHeight,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps?q=19+Mansel+Street,+Swansea,+SA1+5SG,+UK&output=embed"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Right Section */}
            <div
              className="contact-content flex-grow-1"
              style={{ minWidth: "300px", flex: "1 1 45%" }}
              ref={contentRef}
            >
              {/* Cards */}
              <div
                className="contact-cards-container"
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
                  text="+44(0) 7831 533 017"
                />

                <ContactCard
                  icon="bi bi-clock"
                  title="Open Hours"
                  text="Mon–Fri: 9AM – 6PM"
                />
              </div>

              {/* Form */}
              <div
                className="contact-form-container"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>
                <p>
                  Feel free to reach out with any queries — our team will assist
                  you as soon as possible.
                </p>

                <form className="php-email-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control modern-input"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control modern-input"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control modern-input mt-3"
                    placeholder="Subject"
                    required
                  />

                  <textarea
                    className="form-control modern-input mt-3"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>

                  <div className="form-submit mt-3 d-flex align-items-center justify-content-between">
                    <button
                      type="submit"
                      className="btn-submit btn btn-primary"
                    >
                      Send Message
                    </button>

                    <div className="social-links d-flex gap-2">
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#">
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
