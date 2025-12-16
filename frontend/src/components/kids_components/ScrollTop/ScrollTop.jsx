import React, { useState, useEffect } from "react";
import "./ScrollTop.css";
import topIcon from "../../../assets/images/top-up.png";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img src={topIcon} alt="Scroll to top" />
    </div>
  );
};

export default ScrollTop;
