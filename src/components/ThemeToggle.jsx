import React, { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import Button from "./Button";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const [btnData, setBtnData] = useState({
    variant: "secondary",
    toggle: {
      isBtnToggle: true,
      on: theme === "dark" ? false : true,
      onTxt: "Go Dark",
      offTxt: "Go Light",
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
    setBtnData({
      ...btnData,
      toggle: {
        ...btnData.toggle,
        on: theme === "dark" ? true : false,
      },
    });
  };
  useEffect(() => {
    setBtnData({
      ...btnData,
      customClassName: `theme-toggle theme-toggle-${theme}`,
    });
  }, [theme]);

  return (
    <>
      <Button
        btnData={{
          ...btnData,
          handleClick: handleClick,
        }}
      />
    </>
  );
};

export default ThemeToggle;
