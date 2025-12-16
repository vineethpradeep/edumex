import React from "react";
import PropTypes from "prop-types";
import "./SliderArrow.css";

const SliderArrow = ({
  direction = "left",
  icon,
  onClick,
  disabled = false,
  position = "center",
  offsetX = "0.5rem",
  offsetY = "50%",
}) => {
  const dynamicStyle = {
    top:
      position === "center" ? offsetY : position === "top" ? offsetY : "auto",
    bottom: position === "bottom" ? offsetY : "auto",
    [direction]: offsetX,
    transform: position === "center" ? "translateY(-50%)" : "none",
  };

  return (
    <button
      className={`slider-arrow ${direction}-arrow`}
      onClick={onClick}
      disabled={disabled}
      style={dynamicStyle}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img src={icon} alt={`${direction} arrow`} />
    </button>
  );
};

SliderArrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  position: PropTypes.oneOfType([
    PropTypes.oneOf(["center", "top", "bottom"]),
    PropTypes.object,
  ]),
  offsetX: PropTypes.string,
  offsetY: PropTypes.string,
};

export default SliderArrow;
