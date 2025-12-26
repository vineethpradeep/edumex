import React, { useState, useMemo, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CourseFilters from "../components/CourseFilters";
import PageTitle from "../components/pageTitle/PageTitle";
import fullCoursesData from "../mockdata/fullCoursesData.json";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const CoursesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Most Popular");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  console.log(courses);
  console.log(fullCoursesData);
  const coursesPerPage = 6;

  // --- Load all courses ---
  const loadCourses = async () => {
    try {
      const res = await fetch(`${API_URL}/getAllCourses.php`);
      const data = await res.json();

      if (data.success) {
        setCourses(data.courses);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Flatten all courses from programmes -> classes
  const allCourses = useMemo(() => {
    return fullCoursesData.programmes.flatMap((programme) =>
      programme.classes.flatMap((cls) => cls.courses)
    );
  }, []);

  // Initialize filteredCourses on first render
  useEffect(() => {
    setFilteredCourses(allCourses);
  }, [allCourses]);

  useEffect(() => {
    loadCourses();
  }, []);

  // Apply search & sort whenever searchTerm or sortOption changes
  const paginatedCourses = useMemo(() => {
    let sortedCourses = [...filteredCourses];

    // Search
    if (searchTerm.trim() !== "") {
      sortedCourses = sortedCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    switch (sortOption) {
      case "Newest First":
        sortedCourses.sort((a, b) => b.id - a.id);
        break;
      case "Price: Low to High":
        sortedCourses.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sortedCourses.sort((a, b) => b.price - a.price);
        break;
      case "Duration: Short to Long":
        sortedCourses.sort((a, b) => a.duration.localeCompare(b.duration));
        break;
      default:
        break; // Most Popular: keep original order
    }

    const start = (currentPage - 1) * coursesPerPage;
    return sortedCourses.slice(start, start + coursesPerPage);
  }, [filteredCourses, searchTerm, sortOption, currentPage]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <main className="main">
      <PageTitle title="All Courses" current="Courses" />
      <section id="courses-2" className="courses-2 featured-courses section">
        <div className="container">
          <div className="row">
            {/* Filters */}
            <div className="col-lg-3">
              {/* <CourseFilters
                allCourses={allCourses}
                onFilterChange={({ category, level, duration, price }) => {
                  let filtered = allCourses;

                  if (!category.includes("All Categories")) {
                    filtered = filtered.filter((c) =>
                      category.includes(c.category)
                    );
                  }

                  if (!level.includes("All Levels")) {
                    filtered = filtered.filter((c) => level.includes(c.level));
                  }

                  if (!duration.includes("All Durations")) {
                    filtered = filtered.filter((c) =>
                      duration.includes(c.duration)
                    );
                  }

                  if (!price.includes("All Prices")) {
                    filtered = filtered.filter(
                      (c) =>
                        (price.includes("Free") && c.price === 0) ||
                        (price.includes("Paid") && c.price > 0)
                    );
                  }

                  setFilteredCourses(filtered);
                  setCurrentPage(1); // Reset pagination
                }}
              /> */}
              <CourseFilters
                allCourses={allCourses}
                onFilterChange={(selectedTitle) => {
                  if (selectedTitle === "All Courses") {
                    setFilteredCourses(allCourses);
                  } else {
                    setFilteredCourses(
                      allCourses.filter(
                        (course) =>
                          course.title.replace(
                            "International Higher Diploma ",
                            ""
                          ) === selectedTitle ||
                          course.subcourses?.some(
                            (sub) =>
                              sub.title.replace(
                                "International Higher Diploma ",
                                ""
                              ) === selectedTitle
                          )
                      )
                    );
                  }
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Courses Grid */}
            <div className="col-lg-9">
              {/* Header Search + Sort */}
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
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration: Short to Long</option>
                  </select>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="courses-grid row" data-aos="fade-up">
                {paginatedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    {...course}
                    colClass="col-lg-6 col-md-6 mt-4"
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper" data-aos="fade-up">
                <nav aria-label="Courses pagination">
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
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
                        currentPage === totalPages ? "disabled" : ""
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
