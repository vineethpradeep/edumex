import React from "react";
import { Link } from "react-router-dom";
import "./categoryCard.css";

const CategoryCard = ({
  iconClass = "bi bi-folder",
  title = "Programme",
  courseCount = 0,
  link = "#",
  delay = 100,
}) => {
  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <Link to={link} className="category-card-modern text-decoration-none">
        <div className="cat-card-square">
          {/* ICON */}
          <div
            className="cat-icon-wrap mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              background: "linear-gradient(135deg, #0c1a36, #0b55e9)",
              width: "60px",
              height: "60px",
              color: "#fff",
            }}
          >
            <i className={iconClass} style={{ fontSize: "28px" }}></i>
          </div>

          {/* TITLE */}
          <h6 className="cat-title fw-semibold text-dark mb-1 text-center">
            {title}
          </h6>

          {/* COURSE COUNT */}
          <p className="cat-sub text-muted small mb-0 text-center">
            {courseCount ?? 0} {courseCount === 1 ? "Course" : "Courses"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
