import React from "react";
import "./AbacusLoader.css";

const AbacusLoader = () => (
  <div className="abacus-loader">
    <div className="abacus-column">
      <div className="bead color-primary"></div>
      <div className="bead color-secondary"></div>
      <div className="bead color-orange"></div>
    </div>
    <div className="abacus-column">
      <div className="bead color-secondary"></div>
      <div className="bead color-orange"></div>
      <div className="bead color-primary"></div>
    </div>
    <div className="abacus-column">
      <div className="bead color-orange"></div>
      <div className="bead color-primary"></div>
      <div className="bead color-secondary"></div>
    </div>
  </div>
);

export default AbacusLoader;
