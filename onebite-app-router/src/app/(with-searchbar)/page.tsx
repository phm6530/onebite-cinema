import { BASE_URL } from "@/config/baseUrl";
import classes from "./HomePage.module.scss";
import { MovieData } from "@/type/movie";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import ClickComponent from "@/_component/ClickComponent";
import { withFetch } from "@/lib/fetch";

// 추천
const RecoBooks = async () => {
  const test = await withFetch<MovieData[]>(async () => {
    return fetch(`${BASE_URL}/movie/random`);
  });

  return (
    <div>
      <h3>지금 가장 추천하는 영화</h3>
      <div className={classes.recoList}>
        {!!test
          ? test.map((movie, idx) => {
              return (
                // Client
                <ClickComponent id={movie.id} key={`recoItem-${idx}`}>
                  {/* server */}
                  <MoiveItem {...movie} />
                </ClickComponent>
              );
            })
          : "문제가 있습니다."}
      </div>
    </div>
  );
};

// 전체
const AllBooks = async () => {
  const datas = await withFetch<MovieData[]>(async () => {
    return fetch(`${BASE_URL}/movie`);
  });

  return (
    <div>
      <h3>등록된 모든 영화</h3>
      <div className={classes.allList}>
        {!!datas
          ? datas.map((movie, idx) => {
              return (
                <ClickComponent id={movie.id} key={`movieItem-${idx}`}>
                  {/* server */}
                  <MoiveItem {...movie} />
                </ClickComponent>
              );
            })
          : "문제가 있습니다."}
      </div>
    </div>
  );
};

const Home = async () => {
  return (
    <div className={classes.mainWrap}>
      <RecoBooks />
      <AllBooks />
    </div>
  );
};

export default Home;
