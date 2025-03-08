import { useState, useEffect } from "react";

const useTheme = () => {
  const getInitialTheme = () => {
    // Check if user has manually set a theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;

    // Otherwise, follow system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
