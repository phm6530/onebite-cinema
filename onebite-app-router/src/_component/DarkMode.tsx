"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import classes from "./DarkMode.module.scss";
import { useTheme } from "next-themes";

const transition = "color 1s ease, background 1s ease";
export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.style.transition = transition;
  }, []);

  return (
    <>
      <button
        className={classes.toggleBtn}
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        다크모드{" "}
        <span className={classes.status}>
          {theme === "dark" ? "on" : "off"}
        </span>
      </button>
    </>
  );
}
