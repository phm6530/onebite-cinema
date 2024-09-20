import SearchLayout from "@/_component/Search-layout";
import { ReactNode } from "react";
import { MovieData } from "../../type/moive";
import MovieItem from "@/_component/movie-item";
import classes from "./search.module.scss";
import { fetchSearchMovie } from "@/lib/fetch-movie";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../type/querykey";
import { useRouter } from "next/router";
import MetaHead from "@/_component/meta-head";

/**
 * page Router는 바로 params, searchParams 받아오기 불가함으로
 * gss 사용하거나, useSearchParams, useParams 하거나 useRouter쓰면됨
 */

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  const { data: movieData = [], isLoading } = useQuery({
    queryKey: [QueryKey.search, q],
    queryFn: () => fetchSearchMovie(q as string),
  });

  if (isLoading) {
    return <>loading.....</>;
  }

  return (
    <>
      <MetaHead title={"한입 시네마 - 검색"} />
      <div className={classes.recommendedMovies}>
        {movieData && movieData.length === 0
          ? `"${q}"검색어와 일치하는 영화가 없습니다`
          : movieData.map((e: MovieData, key) => (
              <MovieItem {...e} key={`movie-${key}`} />
            ))}
      </div>
    </>
  );
}

SearchPage.globalLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
