import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard";
import { coursesData } from "../coursesData";

const FeaturedCourses = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="featured-courses" className="featured-courses section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Courses</h2>
        <p>
          Unlock your potential with our featured courses. Gain knowledge and
          skills to excel in your chosen field.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} colClass="col-lg-4 col-md-6" />
          ))}
        </div>

        <div
          className="more-courses text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link to={`/courses`} className="btn-more">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
