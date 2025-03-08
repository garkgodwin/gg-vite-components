import React from "react";
import "../assets/styles/components/button.css";
import { useNavigate } from "react-router";

const Button = ({ btnData, children }) => {
  const navigate = useNavigate();
  //TODO: Add something for outline in this component
  const {
    btnName = "",
    variant = "primary",
    size = "sm",
    disabled = false,
    outlined = false,
    tabIndex = 0,
    title = "Click me",
    ariaLabel,
    customClassName = "",
    internalLink = "",
    externalLink = "",
    handleClick = null,
    content = {
      text: "",
      icon: null,
    },
    toggle = {
      isBtnToggle: false,
      on: false,
      onTxt: "On",
      offTxt: "Off",
    },
  } = btnData;
  const handleClickDefault = (e) => {
    alert("TODO: Add an onclick");
  };
  const handleClickInternalLink = (e) => {
    // do some actions if you want before navigate
    navigate(internalLink);
  };
  const handleClickExternalLink = (e) => {
    // do some actions if you want before new tab
    const newTab = window.open(externalLink, "_blank");
    if (newTab) newTab.opener = null;
  };

  const actualClick = (e) => {
    e.preventDefault();
    if (handleClick && internalLink === "" && externalLink === "") {
      handleClick(e);
    } else if (
      internalLink !== "" &&
      externalLink === "" &&
      !handleClick
    ) {
      handleClickInternalLink();
    } else if (
      externalLink !== "" &&
      internalLink === "" &&
      !handleClick
    ) {
      handleClickExternalLink();
    } else {
      handleClickDefault();
    }
  };
  return (
    <button
      name={btnName}
      className={`btn btn-${variant} btn-${size} ${
        outlined ? "btn-outlined" : ""
      } ${
        toggle.isBtnToggle
          ? `btn-toggle btn-toggle-${toggle.on ? "on" : "off"}`
          : ""
      } ${customClassName}`}
      disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      title={title}
      aria-label={ariaLabel || content.text}
      onClick={actualClick}
    >
      {content.text !== "" && <span>{content.text}</span>}
      {content.icon && (
        <span>
          <i>{content.icon}</i>
        </span>
      )}
      {toggle.isBtnToggle && (
        <>
          <div className="btn-toggle-txt btn-toggle-txt-off">
            {toggle.offTxt}
          </div>
          <div className="btn-toggle-txt btn-toggle-txt-on">
            {toggle.onTxt}
          </div>
          <div className="btn-toggle-box"></div>
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
