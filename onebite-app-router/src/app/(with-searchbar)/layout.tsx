import SearchBar from "@/_component/Global-search";
import { ReactNode, Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={"loading.."}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
