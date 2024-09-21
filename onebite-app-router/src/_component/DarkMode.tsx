"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import classes from "./DarkMode.module.scss";

const transition = "color 1s ease, background 1s ease";
export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return !!localStorage.getItem("darkMode") || false;
  });

  useEffect(() => {
    document.body.style.transition = transition;
  }, []);

  useLayoutEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("darkMode", "true");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.removeItem("darkMode");
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        className={classes.toggleBtn}
        type="button"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        다크모드{" "}
        <span className={classes.status}>{isDarkMode ? "on" : "off"}</span>
      </button>
    </>
  );
}
