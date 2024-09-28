import ClickComponent from "@/_component/ClickComponent";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";
import classes from "./search.module.scss";

import { Suspense } from "react";
import delay from "@/util/delay";
import SkeletonMovies from "@/_component/skeleton/SkeletonMovies";

const SearchResult = async ({ q }: { q: string }) => {
  const result = await withFetch<MovieData[]>(async () => {
    const url = `${BASE_URL}/movie/search?q=${q}`;

    await delay(2000);

    return fetch(url, {
      cache: "force-cache",
    });
  });

  if (result.length === 0) {
    return "일치하는 검색어가 없습니다.";
  }

  return (
    <>
      {result.map((e, idx) => {
        return (
          <ClickComponent id={e.id} key={`seachMovie-${idx}`}>
            <MoiveItem {...e} />
          </ClickComponent>
        );
      })}
    </>
  );
};

const SearchPage = ({ searchParams }: { searchParams: { q: string } }) => {
  //타입에러 방지
  if (!searchParams.q) {
    return false as never;
  }

  return (
    <>
      <div className={classes.searchWrap}>
        <Suspense fallback={<SkeletonMovies cnt={3} />} key={searchParams.q}>
          <SearchResult q={searchParams.q || ""} />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;
