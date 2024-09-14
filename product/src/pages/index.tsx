import SearchLayout from "@/_component/Search-layout";
import { ReactNode } from "react";
import classes from "./home.module.scss";
import { fetchAllMovies, fetchRecommendedMovies } from "@/lib/fetch-movie";
import MovieItem from "@/_component/movie-item";
import { InferGetServerSidePropsType } from "next";
import { MovieData } from "../../type/moive";

export async function getServerSideProps() {
  const [recoData, allMovieData] = await Promise.all([
    fetchRecommendedMovies(),
    fetchAllMovies(),
  ]);

  return {
    props: { recoData, allMovieData },
  };
}

export default function Home({
  recoData,
  allMovieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <section className={classes.section}>
        {/* 추천영화 */}
        <h3>지금 가장 추천하는 영화</h3>
        <div className={classes.recommendedMovies}>
          {recoData.map((e: MovieData, key) => (
            <MovieItem {...e} key={`movie-${key}`} />
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <h3>등록된 모든 영화</h3>
        <div className={classes.movielist}>
          {allMovieData.map((e: MovieData, key) => (
            <MovieItem {...e} key={`movie-${key}`} />
          ))}
        </div>
      </section>
    </>
  );
}

Home.globalLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
