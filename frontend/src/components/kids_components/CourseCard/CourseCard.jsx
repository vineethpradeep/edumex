import React from "react";
import { motion as Motion } from "framer-motion";
import "./CourseCard.css";

const CourseCard = ({ title, description, icon }) => {
  return (
    <Motion.div
      className="course-card p-4 rounded-4 d-flex flex-column h-100 position-relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="course-card-bg"></div>

      <div className="course-icon mb-4">
        <img src={icon} alt={title} className="img-fluid" />
      </div>

      <h3 className="course-title mb-4">{title}</h3>

      <p className="course-description flex-grow-1">{description}</p>

      <button className="btn btn-primary mt-3">Learn More</button>
    </Motion.div>
  );
};

export default CourseCard;
