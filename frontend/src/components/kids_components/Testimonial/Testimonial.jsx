import React from "react";
import { motion as Motion } from "framer-motion";
import SliderArrow from "../SliderArrow/SliderArrow";
import "./Testimonial.css";

import ArrowLeft from "../../../assets/icons/spider-arrow-left.svg";
import ArrowRight from "../../../assets/icons/spider-arrow-right.svg";
import HappyFace from "../../../assets/icons/happy-face.svg";
import LoopArrow from "../../../assets/icons/loop-arrow.svg";

const TestimonialSection = () => {
  const prevSlide = () => console.log("Previous Slide");
  const nextSlide = () => console.log("Next Slide");
  return (
    <section className="testimonial-section position-relative py-5">
      <div className="container text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="title-header ">
            <Motion.h6
              className="primary mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Happy Parents
            </Motion.h6>

            <Motion.h1
              className="mb-4 default-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Parents Say About Us
            </Motion.h1>
          </div>
          <Motion.img
            src={LoopArrow}
            alt="Loop Arrow"
            className="testimonial-loop-arrow"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-muted mx-auto w-75">
            Our commitment to excellence is reflected in the heartfelt feedback
            we receive from parents. Here are some of their testimonials,
            sharing their experiences and satisfaction with our services.
          </p>
        </Motion.div>

        <div className="testimonial-wrapper mt-5 position-relative mx-auto p-5 rounded-4 shadow-sm text-white">
          <Motion.img
            src={HappyFace}
            alt="Happy Face"
            className="testimonial-happy-face"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <SliderArrow
            direction="left"
            icon={ArrowLeft}
            onClick={prevSlide}
            position="center"
            offsetX="-8rem"
          />
          <SliderArrow
            direction="right"
            icon={ArrowRight}
            onClick={nextSlide}
            position="center"
            offsetX="-8rem"
          />

          <div className="mb-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <i
                  key={i}
                  className="bi bi-star-fill me-1"
                  style={{ color: "var(--color-secondary)" }}
                ></i>
              ))}
          </div>

          <p className="mb-4 fs-6">
            "QualiTrust International has been a blessing for our family. Their
            dedication to providing quality education and care is unmatched. Our
            child has thrived in their nurturing environment, and we couldn't be
            happier with the progress we've seen."
          </p>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <div className="author-image position-relative">
              <img
                src="/assets/img/testimonial-user.jpg"
                alt="User"
                className="rounded-circle border border-4 border-warning"
                width="80"
                height="80"
              />
            </div>
            <div className="text-start">
              <h5 className="fw-bold text-white mb-1">Noah Emma</h5>
              <p className="mb-0 small text-light">Business Head</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
