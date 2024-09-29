import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";
import classes from "./MoviceDetail.module.scss";
import Image from "next/image";

type MovieDetailProps = {
  id: string;
};
const MovieDetail: React.FC<MovieDetailProps> = async ({ id }) => {
  const data = await withFetch<MovieData>(async () => {
    const url = `${BASE_URL}/movie/${id}`;
    return fetch(url, {
      cache: "force-cache",
    });
  });

  return (
    <section>
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
    </section>
  );
};

export default MovieDetail;
