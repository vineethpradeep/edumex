import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard";
import fullCoursesData from "../mockdata/fullCoursesData.json";

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const FeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    AOS.init({ once: true });

    // Flatten all courses
    const allCourses = fullCoursesData.programmes.flatMap((programme) =>
      programme.classes.flatMap((cls) => cls.courses)
    );

    // Pick 6 random courses
    const randomCourses = shuffleArray(allCourses).slice(0, 6);

    // Defer setState to avoid synchronous call warning
    setTimeout(() => {
      setFeaturedCourses(randomCourses);
    }, 0);
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
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              colClass="col-lg-4 col-md-6"
            />
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
