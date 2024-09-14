import classes from "./[id].module.scss";
import Image from "next/image";
import { fetchDetailMovie } from "@/lib/fetch-movie";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;

  try {
    const item = await fetchDetailMovie(id);

    if (!item) {
      return {
        notFound: true,
      };
    }

    return {
      props: { item },
    };
  } catch (error) {
    // 서버 오류에 대한 사용자 피드백 제공
    return {
      props: { error: "서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요." },
    };
  }
};

export default function MovieDetail({
  item,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (error) {
    return <div>{error}</div>;
  }

  if (!item) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }

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
