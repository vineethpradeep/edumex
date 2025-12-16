import { motion as Motion } from "framer-motion";
import CourseCard from "../../../components/kids_components/CourseCard/CourseCard";
import "./EducationPrograms.css";

import abacusIcon from "../../../assets/icons/abacus.svg";
import booksIcon from "../../../assets/icons/books.svg";
import hatIcon from "../../../assets/icons/hat.svg";

const courses = [
  {
    id: 1,
    title: "Abacus Math",
    description:
      "Abacus Math is a powerful tool that enhances children's cognitive abilities, improves concentration, and boosts confidence. Through hands-on learning with the abacus, children develop strong mental calculation skills, leading to better academic performance and a lifelong love for learning.",
    icon: abacusIcon,
  },
  {
    id: 2,
    title: "Creative Arts",
    description:
      "Our team ensures every detail of creative arts sessions is unique. From furniture to materials, everything is carefully selected to create a fun and engaging environment for your child.",
    icon: booksIcon,
  },
  {
    id: 3,
    title: "STEM Exploration",
    description:
      "Hands-on STEM activities help children understand science, technology, engineering, and math concepts in a fun and interactive way, fostering critical thinking and problem-solving skills.",
    icon: hatIcon,
  },
];

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

const EducationPrograms = () => {
  return (
    <section className="education-programs py-5">
      <div className="container">
        <div className="title-header ">
          <Motion.h6
            className="primary mb-3"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Our Courses
          </Motion.h6>

          <Motion.h1
            className="mb-4 default-color"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Step By Step Systematic Education
          </Motion.h1>
        </div>

        <Motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <Motion.div
              key={course.id}
              className="col-md-6 col-lg-4"
              variants={itemVariants}
            >
              <CourseCard {...course} />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default EducationPrograms;
