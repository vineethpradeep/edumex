import React from "react";
import { motion as Motion } from "framer-motion";
import Button from "../Button/Button";
import "./Gallery.css";

import img1 from "../../../assets/images/gallry-01.jpg";
import img2 from "../../../assets/images/gallry-02.jpg";
import img3 from "../../../assets/images/gallry-03.jpg";
import img4 from "../../../assets/images/gallry-04.jpg";
import img5 from "../../../assets/images/gallry-05.jpg";

import eyeIcon from "../../../assets/icons/eye.svg";

const images = [img1, img2, img3, img4, img5];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Gallery = () => {
  return (
    <section className="gallery-section py-5 position-relative">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="title-header ">
            <Motion.h6
              className="primary mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Gallery
            </Motion.h6>

            <Motion.h1
              className="mb-4 default-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore Our Moments
            </Motion.h1>
          </div>
          <Button variant="primary" onClick={() => alert("Booking clicked!")}>
            View Full Gallery →
          </Button>
        </div>

        <Motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Motion.div className="gallery-item wide" variants={itemVariants}>
            <img src={images[0]} alt="Gallery 1" />
            <div className="gallery-overlay d-flex align-items-center justify-content-center">
              <img src={eyeIcon} alt="View" />
            </div>
          </Motion.div>

          <Motion.div className="gallery-item medium" variants={itemVariants}>
            <img src={images[1]} alt="Gallery 2" />
            <div className="gallery-overlay d-flex align-items-center justify-content-center">
              <img src={eyeIcon} alt="View" />
            </div>
          </Motion.div>

          <Motion.div className="gallery-item tall" variants={itemVariants}>
            <img src={images[2]} alt="Gallery 3" />
            <div className="gallery-overlay d-flex align-items-center justify-content-center">
              <img src={eyeIcon} alt="View" />
            </div>
          </Motion.div>

          <Motion.div className="gallery-item medium" variants={itemVariants}>
            <img src={images[3]} alt="Gallery 4" />
            <div className="gallery-overlay d-flex align-items-center justify-content-center">
              <img src={eyeIcon} alt="View" />
            </div>
          </Motion.div>

          <Motion.div className="gallery-item wide" variants={itemVariants}>
            <img src={images[4]} alt="Gallery 5" />
            <div className="gallery-overlay d-flex align-items-center justify-content-center">
              <img src={eyeIcon} alt="View" />
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Gallery;
