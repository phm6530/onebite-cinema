import SearchLayout from "@/_component/Search-layout";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";
import { MovieData } from "../../type/moive";
import { QueryKey } from "../../type/querykey";
import movieDummy from "@/dummy.json";
import MovieItem from "@/_component/movie-item";
import classes from "./search.module.scss";

/**
 * page Router는 바로 params, searchParams 받아오기 불가함으로
 * gss 사용하거나, useSearchParams, useParams 하거나 useRouter쓰면됨
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  return {
    props: { query }, // 컴포넌트에 props로 전달
  };
}

export default function SearchPage({ query }: { query: { q?: string } }) {
  const searchQuery = query.q || ""; // query.q가 undefined일 경우 빈 문자열을 기본값으로 설정

  const { data: moveDatas = [], isLoading } = useQuery<MovieData[]>({
    queryKey: [QueryKey.search, searchQuery], // 검색어를 queryKey로 사용
    queryFn: () => movieDummy,
    select: (list) => {
      return list.filter((e) =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className={classes.recommendedMovies}>
        {moveDatas && moveDatas.length === 0
          ? "검색어와 일치하는 영화가 없습니다"
          : moveDatas.map((e: MovieData, key) => (
              <MovieItem {...e} key={`movie-${key}`} />
            ))}
      </div>
    </>
  );
}

SearchPage.globalLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
