import { motion as Motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/kids_components/Button/Button";
import "./AboutUs.css";

import about1 from "../../../assets/images/about-1.jpg";
import about2 from "../../../assets/images/about-2.jpg";
import about3 from "../../../assets/images/about-3.jpg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <Motion.div
          className="row g-5 align-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div className="col-lg-6" variants={itemVariants}>
            <div className="title-header ">
              <Motion.h6 variants={itemVariants} className="mb-2 primary">
                Welcome to Qualitrust International School
              </Motion.h6>

              <Motion.h1 variants={itemVariants} className="mb-4 default-color">
                Learn to Play, Converse with Confidence.
              </Motion.h1>
            </div>
            <Motion.p variants={itemVariants}>
              Our team discussed every single detail to make sure is the most
              versatile and unique learning experience for your child. From the
              furniture to the learning materials, everything is carefully
              selected to create a fun and engaging environment.
            </Motion.p>
            <Motion.p variants={itemVariants} className="mb-4">
              Abacus Math is a powerful tool that enhances children's cognitive
              abilities, improves concentration, and boosts confidence. Through
              hands-on learning with the abacus, children develop strong mental
              calculation skills, leading to better academic performance and a
              lifelong love for learning.
            </Motion.p>

            <Motion.div
              className="row g-4 align-items-center"
              variants={itemVariants}
            >
              <div className="col-sm-6">
                <Button
                  variant="primary"
                  className="rounded-pill py-3 px-5"
                  onClick={() => alert("Read More clicked!")}
                >
                  Read More
                </Button>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{ fontSize: "28px", color: "#6c757d" }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-primary mb-0">Arshik</h6>
                    <small>CEO & Founder</small>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>

          <Motion.div className="col-lg-6 about-img" variants={itemVariants}>
            <div className="row">
              <div className="col-12 text-center">
                <Motion.img
                  className="img-fluid w-75 rounded-circle bg-light p-3"
                  src={about1}
                  alt="About 1"
                  variants={itemVariants}
                />
              </div>
              <div className="col-6 text-start" style={{ marginTop: "-150px" }}>
                <Motion.img
                  className="img-fluid w-100 rounded-circle bg-light p-3"
                  src={about2}
                  alt="About 2"
                  variants={itemVariants}
                />
              </div>
              <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                <Motion.img
                  className="img-fluid w-100 rounded-circle bg-light p-3"
                  src={about3}
                  alt="About 3"
                  variants={itemVariants}
                />
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
