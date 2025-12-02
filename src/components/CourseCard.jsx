import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  // badge,
  // price,
  // level,
  // duration,
  title,
  description,
  colClass = "col-lg-4 col-md-6",
}) => {
  return (
    <div className={colClass} data-aos="fade-up">
      <div className="course-card">
        <div className="course-image">
          <img src={image} alt={title} className="img-fluid" />
          {/* {badge && (
            <div className={`course-badge ${badge.toLowerCase()}`}>{badge}</div>
          )} */}
          {/* {price && <div className="course-price">£ {price}</div>} */}
        </div>

        <div className="course-content">
          {/* <div className="course-meta">
            {level && <span className="level">{level}</span>}
            {duration && <span className="duration">{duration}</span>}
          </div> */}

          <h3>
            <Link to={`/course_details/${id}`}>{title}</Link>
          </h3>
          <p>
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>

          <Link to={`/course_details/${id}`} className="btn-course">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
