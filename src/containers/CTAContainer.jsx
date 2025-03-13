import React from "react";
import "../assets/styles/containers/cta-container.css";

const CTAContainer = ({
  className = "",
  id = "",
  style = {},
  children,
}) => {
  return (
    <section
      id={id}
      className={`cta-container ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default CTAContainer;
