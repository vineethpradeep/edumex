import React from "react";

const BlogCard = ({
  authorName,
  authorImg,
  likes,
  title,
  description,
  postImg,
  link,
  delay,
}) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card blog-card">
        <div className="card-top d-flex align-items-center mb-2">
          <img
            src={authorImg}
            alt={authorName}
            className="rounded-circle me-2"
          />
          <span className="author-name">By {authorName}</span>
          <span className="ms-auto likes">
            <i className="bi bi-heart"></i> {likes}
          </span>
        </div>
        <div className="card-img-wrapper">
          <img src={postImg} alt={title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={link}>{title}</a>
          </h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
