import React from "react";
import "../assets/styles/components/text.css";

const Text = ({ txtData = {}, children }) => {
  // ariaHidden to false if there's already some other texts with this to avoid duplication
  const {
    variant = "primary", // default variant
    type = "p", // default type
    size = "sm", // default fontsize
    fontWeight = "regular", // default fontweight
    fontSize = "", // custom fontsize
    txt = "", // default text
    id, // will be used for aria-labelledBy in a section - commonly used for headers
    ariaHidden = false,
    className = "", // custom className
  } = txtData;
  if (type === "h1") {
    return (
      <h1
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h1>
    );
  }
  if (type === "h2") {
    return (
      <h2
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h2>
    );
  }
  if (type === "h3") {
    return (
      <h3
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h4>
    );
  }
  if (type === "h5") {
    return (
      <h5
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h5>
    );
  }
  if (type === "h6") {
    return (
      <h6
        id={id}
        aria-hidden={ariaHidden}
        className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
        style={{ fontSize: fontSize }}
      >
        {txt}
        {children}
      </h6>
    );
  }
  return (
    <p
      id={id}
      aria-hidden={ariaHidden}
      className={`txt txt-${type} txt-${variant} txt-${size} txt-font-weight-${fontWeight} ${className}`}
      style={{ fontSize: fontSize }}
    >
      {txt}
      {children}
    </p>
  );
};

export default Text;
