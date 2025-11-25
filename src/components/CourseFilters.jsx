import React, { useState, useEffect } from "react";

const CourseFilters = ({ allCourses, onFilterChange }) => {
  const [selected, setSelected] = useState({
    category: ["All Categories"],
    level: ["All Levels"],
    duration: ["All Durations"],
    price: ["All Prices"],
  });

  const options = {
    category: ["All Categories", ...new Set(allCourses.map((c) => c.category))],
    level: ["All Levels", ...new Set(allCourses.map((c) => c.level))],
    duration: ["All Durations", ...new Set(allCourses.map((c) => c.duration))],
    price: ["All Prices", "Free", "Paid"],
  };

  useEffect(() => {
    onFilterChange(selected);
  }, [selected]);

  const handleCheckboxChange = (item, type) => {
    const current = selected[type];
    let newSelection;

    if (item.startsWith("All")) {
      newSelection = [item];
    } else if (current.includes(item)) {
      newSelection = current.filter((i) => i !== item);
    } else {
      newSelection = [...current.filter((i) => !i.startsWith("All")), item];
    }

    if (newSelection.length === 0) {
      newSelection = [options[type][0]];
    }

    setSelected({ ...selected, [type]: newSelection });
  };

  const renderCheckboxes = (items, type) =>
    items.map((item) => (
      <label className="filter-pill" key={item}>
        <input
          type="checkbox"
          checked={selected[type].includes(item)}
          onChange={() => handleCheckboxChange(item, type)}
        />
        <span>{item}</span>
      </label>
    ));

  const filterGroups = [
    { title: "Category", type: "category" },
    { title: "Level", type: "level" },
    { title: "Duration", type: "duration" },
    { title: "Price", type: "price" },
  ];

  return (
    <div className="course-filters p-4 border rounded shadow-sm bg-white">
      <h4 className="filter-title mb-4 fw-semibold">Filter Courses</h4>
      {filterGroups.map(({ title, type }) => (
        <div className="filter-group mb-4" key={type}>
          <h6 className="fw-semibold mb-3">{title}</h6>
          <div className="filter-options d-flex flex-wrap gap-2">
            {renderCheckboxes(options[type], type)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseFilters;
