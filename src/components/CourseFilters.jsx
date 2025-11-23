const CourseFilters = () => {
  const categories = [
    "All Categories",
    "Programming",
    "Design",
    "Business",
    "Marketing",
  ];
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const durations = ["Under 5 hours", "5-20 hours", "20+ hours"];
  const prices = ["Free", "Paid"];

  const renderCheckboxes = (items) => {
    return items.map((item, index) => (
      <label className="filter-checkbox" key={index}>
        <input type="checkbox" defaultChecked={index === 0} />
        <span className="checkmark"></span>
        {item}
      </label>
    ));
  };

  return (
    <div className="course-filters" data-aos="fade-right" data-aos-delay="100">
      <h4 className="filter-title">Filter Courses</h4>

      <div className="filter-group">
        <h5>Category</h5>
        <div className="filter-options">{renderCheckboxes(categories)}</div>
      </div>

      <div className="filter-group">
        <h5>Level</h5>
        <div className="filter-options">{renderCheckboxes(levels)}</div>
      </div>

      <div className="filter-group">
        <h5>Duration</h5>
        <div className="filter-options">{renderCheckboxes(durations)}</div>
      </div>

      <div className="filter-group">
        <h5>Price</h5>
        <div className="filter-options">{renderCheckboxes(prices)}</div>
      </div>
    </div>
  );
};

export default CourseFilters;
