import SearchLayout from "@/_component/Search-layout";
import { ReactNode } from "react";
import classes from "./home.module.scss";
import { fetchAllMovies, fetchRecommendedMovies } from "@/lib/fetch-movie";
import MovieItem from "@/_component/movie-item";
import { InferGetServerSidePropsType } from "next";
import { MovieData } from "../../type/moive";

export async function getStaticProps() {
  const [recoResult, allMovieResult] = await Promise.allSettled([
    fetchRecommendedMovies(),
    fetchAllMovies(),
  ]);

  const recoData = recoResult.status === "fulfilled" ? recoResult.value : [];
  const allMovieData =
    allMovieResult.status === "fulfilled" ? allMovieResult.value : [];

  if (
    recoResult.status === "rejected" ||
    allMovieResult.status === "rejected"
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recoData,
      allMovieData,
    },
    revaildate: 3,
  };
}

export default function Home({
  recoData,
  allMovieData,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <section className={classes.section}>
        {/* 추천영화 */}
        <h3>지금 가장 추천하는 영화</h3>
        <div className={classes.recommendedMovies}>
          {recoData.length > 0 ? (
            recoData.map((e: MovieData, key) => (
              <MovieItem {...e} key={`movie-${key}`} />
            ))
          ) : (
            <p>추천 영화를 불러올 수 없습니다.</p>
          )}
        </div>
      </section>

      <section className={classes.section}>
        {/* 전체 리스트 */}
        <h3>등록된 모든 영화</h3>
        <div className={classes.movielist}>
          {allMovieData.length > 0 ? (
            allMovieData.map((e: MovieData, key) => (
              <MovieItem {...e} key={`movie-${key}`} />
            ))
          ) : (
            <p>모든 영화를 불러올 수 없습니다.</p>
          )}
        </div>
      </section>
    </>
  );
}

Home.globalLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
