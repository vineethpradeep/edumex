import React from "react";
import CourseCard from "../components/CourseCard";
import { coursesData as courses } from "../coursesData";
import CourseFilters from "../components/CourseFilters";
import PageTitle from "../components/PageTitle";

const CoursesSection = () => {
  return (
    <main className="main">
      <PageTitle title="All Courses" current="Courses" />
      <section id="courses-2" className="courses-2 featured-courses section">
        <div className="container">
          <div className="row">
            {/* Filters */}
            <div className="col-lg-3">
              <CourseFilters />
            </div>

            {/* Courses Grid */}
            <div className="col-lg-9">
              {/* Header Search + Sort */}
              <div className="courses-header" data-aos="fade-left">
                <div className="search-box">
                  <i className="bi bi-search"></i>
                  <input type="text" placeholder="Search courses..." />
                </div>
                <div className="sort-dropdown">
                  <select>
                    <option>Sort by: Most Popular</option>
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration: Short to Long</option>
                  </select>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="courses-grid row" data-aos="fade-up">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    {...course}
                    colClass="col-lg-6 col-md-6"
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper" data-aos="fade-up">
                <nav aria-label="Courses pagination">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="bi bi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesSection;
