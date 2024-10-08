import { MovieData } from "../../type/moive";
import { BASE_URL } from "../../util/contants";
import { withFetch } from "../../util/fetch";

//전체 영화
export const fetchAllMovies = async (): Promise<MovieData[]> => {
  const url = `${BASE_URL}/movie`;
  return withFetch<MovieData[]>(() => fetch(url));
};

//추천 영화 3개씩
export const fetchRecommendedMovies = async (): Promise<MovieData[]> => {
  const url = `${BASE_URL}/movie/random`;
  return withFetch<MovieData[]>(() => fetch(url));
};

// 영화 검색
export const fetchSearchMovie = async (keyword: string) => {
  const url = `${BASE_URL}/movie/search?q=${keyword}`;
  return withFetch<MovieData[]>(() => fetch(url));
};

//영화 디테일정보
export const fetchDetailMovie = async (id: string) => {
  const url = `${BASE_URL}/movie/${id}`;
  return withFetch<MovieData>(() => fetch(url));
};
