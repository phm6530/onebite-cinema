import Grid from "@/_component/ui/Grid";
import classes from "./Header.module.scss";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className={classes.header}>
      <Grid.center className={classes.logoAlignItems}>
        <div className={classes.logo} onClick={() => router.push("/")}>
          ONEBITE CINEMA
        </div>
      </Grid.center>
    </div>
  );
}
