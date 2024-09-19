import classes from "./[id].module.scss";
import Image from "next/image";
import { fetchAllMovies, fetchDetailMovie } from "@/lib/fetch-movie";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { MovieData } from "../../../type/moive";

export const getStaticPaths = async () => {
  const movieDatas = await fetchAllMovies();
  const movieParams = movieDatas.map((mv) => {
    return { params: { id: mv.id + "" } };
  });

  return {
    paths: movieParams,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const { id } = context.params!;
    const movieDetail: MovieData = await fetchDetailMovie(id as string);

    return {
      props: { movieDetail },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function MovieDetail({
  movieDetail,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return "Loading....";

  const {
    title,
    description,
    releaseDate,
    company,
    genres,
    subTitle,
    runtime,
    posterImgUrl,
  } = movieDetail as MovieData;

  return (
    <>
      <div
        className={`${classes.imgContainer}`}
        style={{ backgroundImage: `url(${posterImgUrl})` }}
      >
        <div className={classes.imgWrap}>
          <Image
            src={posterImgUrl}
            fill
            alt={title}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={classes.summryContainer}>
        <h2>{title}</h2>
        <p>
          {releaseDate} / {genres.join(", ")} / {runtime}분
        </p>
        <p className={classes.company}>{company}</p>
        <h3>{subTitle}</h3>

        <p>{description}</p>
      </div>
    </>
  );
}
