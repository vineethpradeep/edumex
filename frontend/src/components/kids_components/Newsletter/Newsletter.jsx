import React from "react";
import { motion as Motion } from "framer-motion";
import "./Newsletter.css";

import Brocket from "../../../assets/icons/big-rocket.svg";

const Newsletter = () => {
  return (
    <section className="newsletter-wrapper">
      <Motion.img
        src={Brocket}
        alt="Brocket"
        className="newsletter-rocket"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="cloud-shape top-cloud">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--color-primary)"
            d="M0,40 C180,80 360,0 540,30 C720,60 900,10 1080,50 C1260,90 1440,30 1440,30 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="newsletter-section text-center">
        <div className="container">
          <div className="title-header">
            <Motion.h6
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 secondary"
            >
              Stay Updated!
            </Motion.h6>

            <Motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 white-color"
            >
              Subscribe to Our Newsletter
            </Motion.h1>
          </div>

          <Motion.p
            className="text-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Get the latest updates, educational tips, and insights directly to
            your inbox.
          </Motion.p>

          <Motion.form
            className="newsletter-form position-relative mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your mail address here"
            />
            <button type="submit" className="btn btn-primary newsletter-btn">
              Subscribe
            </button>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
