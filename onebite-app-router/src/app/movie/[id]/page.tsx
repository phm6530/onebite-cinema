import NotFound from "@/app/not-found";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";
import classes from "./page.module.scss";
import Image from "next/image";

type MoviePageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: number } }) {
  //한글치면 에러처리
  try {
    if (isNaN(Number(params.id))) {
      throw new Error("error");
    }
    // 요청 캐싱 유도
    const data = await withFetch<MovieData>(async () => {
      const url = `${BASE_URL}/movie/${params.id}`;
      return fetch(url, {
        cache: "force-cache",
      });
    });

    return {
      title: data.title,
    };
  } catch (error) {
    return NotFound();
  }
}

const MoviePage: React.FC<MoviePageProps> = async ({ params }) => {
  const data = await withFetch<MovieData>(async () => {
    const url = `${BASE_URL}/movie/${params.id}`;
    return fetch(url, {
      cache: "force-cache",
    });
  });

  return (
    <>
      <div
        className={classes.backDrop}
        style={{ backgroundImage: `url(${data.posterImgUrl})` }}
      >
        <div className={classes.imgWrap}>
          <Image src={data.posterImgUrl} alt={data.title} fill />
        </div>
      </div>
      <div className={classes.summry}>
        <h2>{data.title} </h2>
        <p>
          {data.releaseDate} / {data.genres} / {data.runtime}분
        </p>

        <h3>{data.subTitle}</h3>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default MoviePage;
