import ClickComponent from "@/_component/ClickComponent";
import MoiveItem from "@/app/(with-searchbar)/_component/MovieItem";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { MovieData } from "@/type/movie";
import classes from "./search.module.scss";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  const result = await withFetch<MovieData[]>(async () => {
    const url = `${BASE_URL}/movie/search?q=${searchParams.q}`;
    return fetch(url);
  });

  return (
    <div className={classes.searchWrap}>
      {result.map((e) => {
        return (
          <ClickComponent id={e.id}>
            <MoiveItem {...e} />
          </ClickComponent>
        );
      })}
    </div>
  );
};

export default SearchPage;
