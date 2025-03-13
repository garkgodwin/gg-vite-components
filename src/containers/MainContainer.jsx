import React from "react";
import "../assets/styles/containers/main-container.css";

const MainContainer = ({
  children,
  className = "",
  fluid = false,
  style = {},
  id = "",
  layout = "",
}) => {
  return (
    <div
      id={id}
      className={`main-container ${fluid ? "fluid-container" : ""} ${
        layout === "sidebar" ? "sidebar-layout" : ""
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default MainContainer;
