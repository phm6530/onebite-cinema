import dummyMoive from "@/dummy.json";
import { MovieData } from "../../../type/moive";
import classes from "./[id].module.scss";
import Image from "next/image";

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;

  const item = dummyMoive.find((e: MovieData) => e.id === +id);
  if (!item) {
    return {
      notFound: true,
    };
  }
  console.log(item);
  return {
    props: { item },
  };
};

export default function MovieDetail({ item }: { item: MovieData }) {
  const {
    title,
    description,
    releaseDate,
    company,
    genres,
    subTitle,
    runtime,
    posterImgUrl,
  } = item;

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
