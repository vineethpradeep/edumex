import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  badge,
  price,
  level,
  duration,
  title,
  description,
  instructorImg,
  instructorName,
  instructorRole,
  rating,
  students,
  delay,
  colClass = "col-lg-4 col-md-6",
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill"></i>
        ))}
        {halfStar && <i className="bi bi-star-half"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star"></i>
        ))}
      </>
    );
  };

  return (
    <div className={colClass} data-aos="fade-up" data-aos-delay={delay}>
      <div className="course-card">
        {/* Course Image */}
        <div className="course-image">
          <img src={image} alt={title} className="img-fluid" />
          {badge && (
            <div className={`course-badge ${badge.toLowerCase()}`}>{badge}</div>
          )}
          {price && <div className="course-price">£ {price}</div>}
        </div>

        {/* Course Content */}
        <div className="course-content">
          <div className="course-meta">
            {level && <span className="level">{level}</span>}
            {duration && <span className="duration">{duration}</span>}
          </div>

          <h3>
            <Link to={`/course_details/${id}`}>{title}</Link>
          </h3>
          <p>{description}</p>

          {/* Instructor Info */}
          <div className="instructor">
            <img
              src={instructorImg}
              alt={instructorName}
              className="instructor-img"
            />
            <div className="instructor-info">
              <h6>{instructorName}</h6>
              <span>{instructorRole}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="course-stats">
            <div className="rating">
              {renderStars()}
              <span>({rating.toFixed(1)})</span>
            </div>
            <div className="students">
              <i className="bi bi-people-fill"></i>
              <span>{students} students</span>
            </div>
          </div>

          <Link to={`/course_details/${id}`} className="btn-course">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
