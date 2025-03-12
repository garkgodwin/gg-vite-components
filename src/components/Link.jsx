import React from "react";
import { NavLink } from "react-router";
import "../assets/styles/components/link.css";

const GLink = ({ linkData, children }) => {
  const {
    variant = "primary",
    type = "internal",
    size = "sm",
    to = "/",
    txt = "",
  } = linkData;

  if (type === "external") {
    <a
      href={to}
      className={`lnk lnk-${variant} lnk-${size} lnk-${type}`}
    >
      {txt}
      {children}
    </a>;
  }
  return (
    <NavLink
      to={to}
      className={(isActive) =>
        `lnk lnk-${variant} lnk-${size} lnk-${type} lnk-${
          isActive ? "active" : "inactive"
        }`
      }
    >
      {txt}
      {children}
    </NavLink>
  );
};

export default GLink;
