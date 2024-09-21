import Link from "next/link";
import classes from "./GlobalNav.module.scss";
import ThemeToggleButton from "@/_component/DarkMode";

export default function GlobalNav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </div>

      {/* 다크모드 */}
      <ThemeToggleButton />
    </nav>
  );
}
