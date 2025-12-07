import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import "./coursesHero.css";

const CoursesHero = () => {
  useEffect(() => {
    AOS.init();
    new PureCounter();
  }, []);

  return (
    <section
      id="courses-hero"
      className="courses-hero section light-background"
    >
      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE TEXT */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-text">
                <h1>Transform Your Future with Edumex Courses</h1>
                <p>
                  Unlock Your Potential with Edumex's Cutting-Edge Online &
                  Offline Certificate Courses. Learn, Grow, and Achieve Your
                  Goals Today.
                </p>

                {/* COUNTERS */}
                <div className="hero-stats">
                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="500"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Students Enrolled</span>
                  </div>

                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="100"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Expert Courses</span>
                  </div>

                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="98"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Success Rate %</span>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="hero-buttons">
                  <a href="#courses" className="btn btn-primary">
                    Browse Courses
                  </a>
                  <a href="#about" className="btn btn-outline">
                    Learn More
                  </a>
                </div>

                {/* FEATURES */}
                <div className="hero-features">
                  <div className="feature">
                    <i className="bi bi-shield-check"></i>
                    <span>Certified Programs</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-clock"></i>
                    <span>Lifetime Access</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-people"></i>
                    <span>Expert Instructors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE + FLOATING CARDS */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="hero-image">
                <div className="main-image">
                  <img
                    src="assets/img/courses-13.webp"
                    alt="Online Learning"
                    className="img-fluid"
                  />
                </div>

                <div className="floating-cards">
                  <div
                    className="course-card"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="card-icon">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <div className="card-content">
                      <h6>Tech Coding Courses</h6>
                      <span>2,450 Students</span>
                    </div>
                  </div>

                  <div
                    className="course-card"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="card-icon">
                      <i className="bi bi-palette"></i>
                    </div>
                    <div className="card-content">
                      <h6>Creative Design</h6>
                      <span>1,890 Students</span>
                    </div>
                  </div>

                  <div
                    className="course-card"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="card-icon">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div className="card-content">
                      <h6>Skilles Development</h6>
                      <span>3,200 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND SHAPES */}
      <div className="hero-background">
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
