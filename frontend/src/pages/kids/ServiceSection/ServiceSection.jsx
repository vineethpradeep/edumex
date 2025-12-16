import { motion as Motion } from "framer-motion";
import "./ServiceSection.css";
import { ServiceItem } from "../../../components/kids_components/ServiceItem/ServiceItem";
import placeholderImg from "../../../assets/images/about-1.jpg";
import {
  FaPuzzlePiece,
  FaBrain,
  FaLightbulb,
  FaRocket,
  FaPaintBrush,
  FaBook,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const leftServices = [
  {
    icon: <FaPuzzlePiece />,
    title: "Creative Learning",
    description:
      "Encouraging innovation and imagination through hands-on, engaging learning methods.",
  },
  {
    icon: <FaBrain />,
    title: "Mind Development",
    description:
      "Enhancing memory, focus, and logical reasoning with structured activities.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "Building analytical skills and confidence through interactive challenges.",
  },
];

const rightServices = [
  {
    icon: <FaRocket />,
    title: "STEM Programs",
    description:
      "Combining science, technology, engineering, and math to inspire young minds.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Art & Creativity",
    description:
      "Encouraging self-expression and imagination through art and design.",
  },
  {
    icon: <FaBook />,
    title: "Life Skills",
    description:
      "Developing communication, empathy, and collaboration for real-world success.",
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section py-5">
      <div className="container text-center mb-5">
        <div className="title-header ">
          <Motion.h6
            className="primary mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </Motion.h6>

          <Motion.h1
            className="mb-4 default-color"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Service Details
          </Motion.h1>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <Motion.div
            className="col-lg-4 col-md-6 mb-4 mb-lg-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {leftServices.map((service, index) => (
              <Motion.div key={index} variants={itemVariants}>
                <ServiceItem {...service} />
              </Motion.div>
            ))}
          </Motion.div>

          <Motion.div
            className="col-lg-4 col-md-6 text-center mb-4 mb-lg-0"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="image-border">
              <img
                src={placeholderImg}
                alt="Service Illustration"
                className="img-fluid service-center-img"
              />
            </div>
          </Motion.div>

          <Motion.div
            className="col-lg-4 col-md-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {rightServices.map((service, index) => (
              <Motion.div key={index} variants={itemVariants}>
                <ServiceItem {...service} />
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
