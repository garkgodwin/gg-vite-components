import React from "react";
import "../assets/styles/containers/section-container.css";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section className={`section-container ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
