import React from "react";

const TestimonialCard = ({ name, role, rating, review, image }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++)
    stars.push(<i key={i} className="bi bi-star-fill"></i>);
  if (halfStar) stars.push(<i key="half" className="bi bi-star-half"></i>);
  while (stars.length < 5)
    stars.push(<i key={stars.length} className="bi bi-star"></i>);

  return (
    <div className="testimonial-item">
      <div className="stars">{stars}</div>
      <p>{review}</p>
      <div className="testimonial-profile">
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>{role}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
