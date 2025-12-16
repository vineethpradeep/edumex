import "./Hero.css";
import { motion as Motion } from "framer-motion";
import Button from "../Button/Button";

import rocket from "../../../assets/icons/rocket.svg";
import arrow from "../../../assets/icons/dot-arrow.svg";
import star from "../../../assets/icons/multi-star.svg";
import abacus from "../../../assets/icons/abacus.svg";
import preserve from "../../../assets/icons/preserve.svg";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <section className="hero-section">
      <div className="hero-bg-grid"></div>

      <Motion.div
        className="hero-image-bg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <Motion.img
        src={rocket}
        alt="rocket"
        className="float-icon rocket"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 3 },
          duration: 1,
          ease: "easeOut",
        }}
      />

      <div className="floating-preserve">
        <Motion.img
          src={abacus}
          alt="abacus"
          className="small-float-icon abacus"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, 10, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 2.8 },
            duration: 1,
            ease: "easeOut",
          }}
        />
        <Motion.img
          src={preserve}
          alt="preserve"
          className="float-icon preserve"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{
            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>

      <Motion.img
        src={star}
        alt="star"
        className="small-float-icon star"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 2.5 },
          duration: 1,
          ease: "easeOut",
        }}
      />

      <Motion.img
        src={arrow}
        alt="arrow"
        className="float-icon arrow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: [0, 10, 0] }}
        transition={{
          x: { repeat: Infinity, duration: 3.2 },
          duration: 1,
          ease: "easeOut",
        }}
      />

      <Motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Motion.h1 className="hero-h1" variants={itemVariants}>
          <span className="orange-text">The Foundation for</span>
          <br />
          <span className="purple-text">the Future.</span>
        </Motion.h1>

        <Motion.p className="hero-p" variants={itemVariants}>
          Discover various fun learning for your 4 to 12 year-old children with
          our programs and the master teachers.
        </Motion.p>

        <Motion.div className="hero-btn-wrapper" variants={itemVariants}>
          <Button variant="primary" onClick={() => alert("Booking clicked!")}>
            Book a Visit
          </Button>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
