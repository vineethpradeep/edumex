import React, { useState } from "react";
import ActivityCard from "../../../components/kids_components/ActivityCard/ActivityCard";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ActivityPrograms.css";
import SliderArrow from "../../../components/kids_components/SliderArrow/SliderArrow";

import img1 from "../../../assets/images/about-1.jpg";
import img2 from "../../../assets/images/about-2.jpg";
import img3 from "../../../assets/images/about-3.jpg";
import img4 from "../../../assets/images/gallry-02.jpg";

import ArrowLeft from "../../../assets/icons/spider-arrow-left.svg";
import ArrowRight from "../../../assets/icons/spider-arrow-right.svg";

const activities = [
  {
    shape: "triangle",
    title: "Science Exploration",
    description: "Hands-on experiments and discoveries to spark curiosity.",
    image: img2,
  },
  {
    shape: "square",
    title: "Math Fun",
    description: "Enhance calculation skills through games and puzzles",
    image: img1,
  },
  {
    shape: "circle",
    title: "Art & Craft",
    description: "Creative sessions for young minds to express themselves.",
    image: img3,
  },
  {
    shape: "hexagon",
    title: "Sports & Games",
    description: "Physical activities for overall development and teamwork.",
    image: img4,
  },
];

const ActivityPrograms = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? activities.length - visibleCount : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) =>
      prev + visibleCount >= activities.length ? 0 : prev + 1
    );

  return (
    <section className="activity-programs-section">
      <div className="container text-center mb-5">
        <div className="title-header ">
          <Motion.h6
            className="primary mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Activities
          </Motion.h6>

          <Motion.h1
            className="mb-4 default-color"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our Activity Programs
          </Motion.h1>
        </div>
        <p className="text-muted">
          Each activity is designed to provide unique and engaging learning
          experiences. Whether it's math fun, science exploration, or art and
          craft, there's something for every child to enjoy and learn from.
          daily and weekly activities that stimulate curiosity and foster a love
          for learning.
        </p>
        <div className="activity-slider position-relative d-flex align-items-center">
          <SliderArrow
            direction="left"
            icon={ArrowLeft}
            onClick={prevSlide}
            position="center"
            offsetX="-8rem"
          />
          <div className="slider-container">
            <Motion.div
              className="slider-track"
              animate={{ x: -current * (220 + 16) }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {activities.map((act, idx) => (
                <ActivityCard key={idx} {...act} />
              ))}
            </Motion.div>
          </div>
          <SliderArrow
            direction="right"
            icon={ArrowRight}
            onClick={nextSlide}
            position="center"
            offsetX="-8rem"
          />
        </div>
      </div>
    </section>
  );
};

export default ActivityPrograms;
