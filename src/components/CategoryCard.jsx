import React from "react";

const CategoryCard = ({
  iconClass,
  title,
  courseCount,
  link,
  color,
  delay,
}) => {
  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <a href={link} className="category-card-modern">
        <div className="cat-card-inner">
          <div
            className="cat-icon-wrap"
            style={{
              background: color,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className={iconClass} style={{ fontSize: "28px" }}></i>
          </div>
          <h5 className="cat-title">{title}</h5>
          <p className="cat-sub">{courseCount} Courses</p>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
