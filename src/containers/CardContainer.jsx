import React from "react";
import "../assets/styles/containers/card-container.css";

const CardContainer = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default CardContainer;
