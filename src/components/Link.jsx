import React from "react";
import { NavLink } from "react-router";
import "../assets/styles/components/link.css";

const GLink = ({ linkData, children }) => {
  const {
    variant = "primary",
    type = "internal",
    target = "_self", // only use for external links
    rel = "next", // only use for external links
    size = "sm",
    filled = false,
    bordered = true,
    to = "/",
    txt = "",
    className = "",
  } = linkData;

  if (type === "external") {
    return (
      <a
        href={to}
        target={target}
        rel={rel}
        aria-hidden="true"
        className={`lnk lnk-${variant} lnk-${size} lnk-${type} ${
          filled ? "lnk-filled" : ""
        } ${bordered ? "lnk-bordered" : ""} ${className}`}
      >
        {txt}
        {children}
      </a>
    );
  }
  return (
    <NavLink
      to={to}
      className={(isActive) =>
        `lnk lnk-${variant} lnk-${size} lnk-${type} ${
          filled ? "lnk-filled" : ""
        } ${bordered ? "lnk-bordered" : ""} ${
          isActive ? "lnk-active" : ""
        } ${className}`
      }
    >
      {txt}
      {children}
    </NavLink>
  );
};

export default GLink;
