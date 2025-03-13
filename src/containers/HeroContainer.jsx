import React from "react";
import "../assets/styles/containers/hero-container.css";

const HeroContainer = ({ children }) => {
  return <div className="hero-container">{children}</div>;
};

export default HeroContainer;
