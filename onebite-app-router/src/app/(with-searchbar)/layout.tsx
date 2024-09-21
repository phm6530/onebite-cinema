import SearchBar from "@/_component/Global-search";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
