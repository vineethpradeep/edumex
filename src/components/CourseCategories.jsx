import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CategoryCard from "./CategoryCard";
import { categoriesData } from "../categoriesData";

const CourseCategories = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="course-categories" className="course-categories section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Course Categories</h2>
        <p>Explore courses in different categories</p>
      </div>
      <div className="container">
        <div className="row g-4">
          {categoriesData.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
