import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import classes from "./ReviewList.module.scss";
import ReviewItem from "@/app/movie/[id]/_component/ReviewItem";

type ReviewListProps = {
  id: string;
};

export interface ReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  movieId: number;
}

const ReviewList: React.FC<ReviewListProps> = async ({ id }) => {
  const result = await withFetch<ReviewData[]>(async () => {
    return fetch(`${BASE_URL}/review/movie/${id}`);
  });

  if (result.length === 0) {
    return <div>리뷰가 없습니다.</div>;
  }

  return (
    <section
      className={classes.ReviewListContainer}
      style={{ display: "flex", flexDirection: "column", gap: "30px" }}
    >
      {result.map((item, idx) => {
        return <ReviewItem key={`movieItem-${idx}`} {...item} />;
      })}
    </section>
  );
};

export default ReviewList;
