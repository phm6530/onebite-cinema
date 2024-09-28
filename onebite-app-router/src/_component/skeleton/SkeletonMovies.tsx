"use client";
import classes from "./SkeletonMovies.module.scss";

const SkeletonMovieItem = (): JSX.Element => {
  return <div className={classes.SkeletonMovieItem}>loading...</div>;
};

type SkeletonMoviesProps = {
  cnt: number;
};

const SkeletonMovies: React.FC<SkeletonMoviesProps> = ({ cnt }) => {
  const divArr = [...Array(cnt)].map((_, idx) => idx);

  return (
    <>
      {divArr.map((_, idx) => {
        return <SkeletonMovieItem key={`skeletonMovieItems-${idx}`} />;
      })}
    </>
  );
};
export default SkeletonMovies;
