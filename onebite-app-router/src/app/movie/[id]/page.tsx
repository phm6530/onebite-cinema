import NotFound from "@/app/not-found";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";

import { notFound } from "next/navigation";
import MovieDetail from "@/app/movie/[id]/_component/MovieDetail";
import ReviewEditor from "@/app/movie/[id]/_component/ReviewEditor";
import ReviewList from "@/app/movie/[id]/_component/ReviewList";
import { Metadata } from "next";
import { ReactNode } from "react";

type MoviePageProps = {
  params: { id: string };
};

//Params Get
export async function generateStaticParams() {
  const datas = await withFetch<MovieData[]>(async () => {
    return fetch(`${BASE_URL}/movie`);
  }).catch((_) => notFound());

  const movieDatas = datas.map((mv) => {
    return { id: mv.id + "" };
  });
  return movieDatas;
}

//동적 메타데이터
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | JSX.Element> {
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
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: data.posterImgUrl,
      },
    };
  } catch (error) {
    return NotFound();
  }
}

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  return (
    <>
      <MovieDetail id={params.id} />
      <ReviewEditor id={params.id} />
      <ReviewList id={params.id} />
    </>
  );
};

export default MoviePage;
