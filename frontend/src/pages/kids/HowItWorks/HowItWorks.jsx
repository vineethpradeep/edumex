import { motion as Motion } from "framer-motion";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookReader,
  FaTrophy,
} from "react-icons/fa";
import "./HowItWorks.css";

const steps = [
  {
    icon: <FaUserGraduate />,
    title: "Enroll Your Child",
    description:
      "Start by enrolling your child with a simple, guided registration process.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Interactive Learning",
    description:
      "Engage with our expert educators through fun and practical sessions.",
  },
  {
    icon: <FaBookReader />,
    title: "Continuous Growth",
    description:
      "Monitor your child's progress and celebrate small achievements along the way.",
  },
  {
    icon: <FaTrophy />,
    title: "Achieve Excellence",
    description:
      "Witness your child excel academically and develop confidence.",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="how-it-works-section position-relative">
      <div className="container text-center">
        <div className="title-header ">
          <Motion.h6
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 secondary"
          >
            How it works
          </Motion.h6>

          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 white-color"
          >
            What is process Qulitrust International School?
          </Motion.h1>
        </div>
        <Motion.div
          className="how-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              className={`how-step ${
                index < steps.length - 1 ? "has-arrow" : ""
              } d-flex flex-column align-items-center`}
            >
              <div className="icon-wrapper mb-4">
                <div className="circle outer">
                  <div className="circle middle">
                    <div className="circle inner">{step.icon}</div>
                  </div>
                </div>
              </div>

              <h5 className="how-step-title">{step.title}</h5>
              <p className="how-step-desc">{step.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
      <div className="how-cloud">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--color-primary)"
            d="
          M0,0
          L1440,0
          L1440,80
          C1380,50 1320,120 1260,80
          C1200,40 1140,100 1080,60
          C1020,20 960,90 900,50
          C840,10 780,70 720,40
          C660,20 600,80 540,50
          C480,20 420,60 360,30
          C300,10 240,60 180,40
          C120,20 60,60 0,40
          Z
        "
          />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
