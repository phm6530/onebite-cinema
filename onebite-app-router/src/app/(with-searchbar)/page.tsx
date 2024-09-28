import { BASE_URL } from "@/config/baseUrl";
import classes from "./HomePage.module.scss";
import { MovieData } from "@/type/movie";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import ClickComponent from "@/_component/ClickComponent";
import { withFetch } from "@/lib/fetch";

import delay from "@/util/delay";
import { Suspense } from "react";
import SkeletonMovies from "@/_component/skeleton/SkeletonMovies";

// 추천
const RecoBooks = async () => {
  await delay(1000);
  const data = await withFetch<MovieData[]>(() => {
    return fetch(`${BASE_URL}/movie/random`, {
      next: { revalidate: 3 },
    });
  });

  return (
    <>
      {data.map((movie, idx) => {
        return (
          // Client
          <ClickComponent id={movie.id} key={`recoItem-${idx}`}>
            {/* server */}
            <MoiveItem {...movie} />
          </ClickComponent>
        );
      })}
    </>
  );
};

// 전체
const AllBooks = async () => {
  const result = await withFetch<MovieData[]>(async () => {
    await delay(2000);
    return fetch(`${BASE_URL}/movie`);
  });

  return (
    <>
      {result.map((movie, idx) => {
        return (
          <ClickComponent id={movie.id} key={`movieItem-${idx}`}>
            {/* server */}
            <MoiveItem {...movie} />
          </ClickComponent>
        );
      })}
    </>
  );
};

const Home = () => {
  return (
    <div className={classes.mainWrap}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={classes.recoList}>
          <Suspense fallback={<SkeletonMovies cnt={3} />}>
            <RecoBooks />
          </Suspense>
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={classes.allList}>
          <Suspense fallback={<SkeletonMovies cnt={10} />}>
            <AllBooks />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;
