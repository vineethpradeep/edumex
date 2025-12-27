import React, { useMemo, useState, useEffect } from "react";

const CourseFilters = ({ allCourses, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  // ---- UNIQUE CATEGORIES ----
  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(allCourses.map((c) => c.category).filter(Boolean))),
    ];
  }, [allCourses]);

  // ---- UNIQUE LEVELS ----
  const levels = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          allCourses.flatMap((c) => (Array.isArray(c.level) ? c.level : []))
        )
      ),
    ];
  }, [allCourses]);

  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      level: selectedLevel,
    });
  }, [selectedCategory, selectedLevel]);

  return (
    <div className="course-filters p-4 border rounded shadow-sm bg-white">
      <h4 className="filter-title mb-4 fw-semibold">Filter Courses</h4>

      {/* CATEGORY FILTER */}
      <div className="filter-group mb-4">
        <h6 className="fw-semibold mb-3">Category</h6>
        {categories.map((cat) => (
          <label className="filter-pill" key={cat}>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* LEVEL FILTER */}
      <div className="filter-group">
        <h6 className="fw-semibold mb-3">Level</h6>
        {levels.map((lvl) => (
          <label className="filter-pill" key={lvl}>
            <input
              type="radio"
              name="level"
              checked={selectedLevel === lvl}
              onChange={() => setSelectedLevel(lvl)}
            />
            <span>{lvl}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CourseFilters;
