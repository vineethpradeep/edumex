import React from "react";
import "./ActivityCard.css";

const ActivityCard = ({ shape, image, title, description }) => {
  const patternId = `imgPattern-${shape}-${Math.floor(Math.random() * 10000)}`;

  const shapes = {
    circle: (
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="var(--color-orange)"
        strokeWidth="4"
      />
    ),
    square: (
      <rect
        x="1.5"
        y="1.5"
        rx="5"
        ry="5"
        width="97"
        height="97"
        stroke="var(--color-secondary)"
        strokeWidth="4"
      />
    ),
    triangle: (
      <polygon
        points="50,2 98,98 2,98"
        stroke="var(--color-purple)"
        strokeWidth="4"
      />
    ),
    hexagon: (
      <polygon
        points="25,2 75,2 98,50 75,98 25,98 2,50"
        stroke="var(--color-primary-light20)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <div className="activity-card text-center">
      <svg viewBox="0 0 100 100" className="shape-svg">
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <image
              href={image}
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        {React.cloneElement(shapes[shape], { fill: `url(#${patternId})` })}
      </svg>
      <h5 className="activity-title mt-4">{title}</h5>
      <p className="activity-desc">{description}</p>
    </div>
  );
};

export default ActivityCard;
