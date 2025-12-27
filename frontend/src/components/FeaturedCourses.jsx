import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const ROTATE_INTERVAL = 5000;

// Shuffle helper
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const FeaturedCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const intervalRef = useRef(null);

  // ---- Fetch courses once ----
  useEffect(() => {
    AOS.init({ once: true });

    const fetchCourses = async () => {
      try {
        const res = await fetch(`${API_URL}/getAllCourses.php`);
        const data = await res.json();

        if (data.success && data.courses?.length) {
          setAllCourses(data.courses);

          // initial 3
          setFeaturedCourses(shuffleArray(data.courses).slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load featured courses:", err);
      }
    };

    fetchCourses();
  }, []);

  // ---- Rotate featured courses ----
  useEffect(() => {
    if (!allCourses.length) return;

    intervalRef.current = setInterval(() => {
      setFeaturedCourses(shuffleArray(allCourses).slice(0, 3));
    }, ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [allCourses]);

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

        <div className="more-courses text-center mt-4" data-aos="fade-up">
          <Link to="/courses" className="btn-more">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
