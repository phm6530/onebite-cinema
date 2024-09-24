import { BASE_URL } from "@/config/baseUrl";
import classes from "./HomePage.module.scss";
import { MovieData } from "@/type/movie";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import ClickComponent from "@/_component/ClickComponent";

const withFetch = async <T,>(cb: () => Promise<Response>): Promise<T> => {
  try {
    const response = await cb();
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw new Error("알 수 없는 에러");
    }
  }
};

// 추천
const RecoBooks = async () => {
  const test = await withFetch<MovieData[]>(async () => {
    return fetch(`${BASE_URL}/movie/random`);
  });

  return (
    <>
      <h3>지금 가장 추천하는 영화</h3>
      <div className={classes.movieList}>
        {!!test
          ? test.map((movie) => {
              return (
                // Client
                <ClickComponent id={movie.id}>
                  {/* server */}
                  <MoiveItem {...movie} />
                </ClickComponent>
              );
            })
          : "에러"}
      </div>
    </>
  );
};

// 전체
const AllBooks = async () => {
  const test = await withFetch<MovieData[]>(async () => {
    return fetch(`${BASE_URL}/movie`);
  });

  return (
    <>
      <h3>지금 가장 추천하는 영화</h3>
      <div className={classes.movieList}>
        {!!test
          ? test.map((movie) => {
              return (
                <div>
                  <img src={movie.posterImgUrl} />
                </div>
              );
            })
          : "에러"}
      </div>
    </>
  );
};

const Home = async () => {
  return (
    <>
      <RecoBooks />
      <AllBooks />
    </>
  );
};

export default Home;
