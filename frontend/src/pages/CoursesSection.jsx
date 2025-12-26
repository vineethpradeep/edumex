import React, { useState, useMemo, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CourseFilters from "../components/CourseFilters";
import PageTitle from "../components/pageTitle/PageTitle";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const CoursesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Most Popular");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const coursesPerPage = 6;

  // --- Load ALL courses dynamically ---
  const loadCourses = async () => {
    try {
      const res = await fetch(`${API_URL}/getAllCourses.php`);
      const data = await res.json();

      if (data.success) {
        setCourses(data.courses);
        setFilteredCourses(data.courses);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // -- SEARCH + SORT + PAGINATION --
  const paginatedCourses = useMemo(() => {
    let sorted = [...filteredCourses];

    // Search
    if (searchTerm.trim()) {
      sorted = sorted.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    switch (sortOption) {
      case "Newest First":
        sorted.sort((a, b) => b.id - a.id);
        break;

      case "Duration: Short to Long":
        sorted.sort((a, b) => a.duration.localeCompare(b.duration));
        break;
    }

    const start = (currentPage - 1) * coursesPerPage;
    return sorted.slice(start, start + coursesPerPage);
  }, [filteredCourses, searchTerm, sortOption, currentPage]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <main className="main">
      <PageTitle title="All Courses" current="Courses" />

      <section id="courses-2" className="courses-2 featured-courses section">
        <div className="container">
          <div className="row">
            {/* LEFT FILTERS */}
            <div className="col-lg-3">
              <CourseFilters
                allCourses={courses}
                onFilterChange={(selectedCategory) => {
                  if (selectedCategory === "All Courses") {
                    setFilteredCourses(courses);
                  } else {
                    setFilteredCourses(
                      courses.filter((c) => c.category === selectedCategory)
                    );
                  }
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* COURSES GRID */}
            <div className="col-lg-9">
              <div className="courses-header" data-aos="fade-left">
                <div className="search-box">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="sort-dropdown">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option>Most Popular</option>
                    <option>Newest First</option>
                    <option>Duration: Short to Long</option>
                  </select>
                </div>
              </div>

              <div className="courses-grid row" data-aos="fade-up">
                {paginatedCourses.length === 0 && (
                  <div className="text-center py-4">No courses found.</div>
                )}

                {paginatedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    {...course}
                    colClass="col-lg-6 col-md-6 mt-4"
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper">
                <nav aria-label="Courses pagination">
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${currentPage === 1 && "disabled"}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        currentPage === totalPages && "disabled"
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
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
