import ClickComponent from "@/_component/ClickComponent";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";
import classes from "./search.module.scss";
import { notFound } from "next/navigation";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  //타입에러 방지
  if (!searchParams.q) {
    return false as never;
  }

  const result = await withFetch<MovieData[]>(async () => {
    const url = `${BASE_URL}/movie/search?q=${searchParams.q}`;
    return fetch(url, {
      cache: "force-cache",
    });
  }).catch((_) => {
    return notFound();
  });

  if (result.length === 0) {
    return "일치하는 검색어가 없습니다.";
  }

  return (
    <div className={classes.searchWrap}>
      {result.map((e, idx) => {
        return (
          <ClickComponent id={e.id} key={`seachMovie-${idx}`}>
            <MoiveItem {...e} />
          </ClickComponent>
        );
      })}
    </div>
  );
};

export default SearchPage;
