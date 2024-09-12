import Header from "@/_component/Global-layout/Header";
import Grid from "@/_component/ui/Grid";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Grid.center>{children}</Grid.center>
    </>
  );
}
