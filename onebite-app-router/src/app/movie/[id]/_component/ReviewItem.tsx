import { ReviewData } from "@/app/movie/[id]/_component/ReviewEditor";
import classes from "./ReviewItem.module.scss";
import ReviewItemDeleteBtn from "@/app/movie/[id]/_component/ReviewItemDeleteBtn";

type ReviewItemProps = ReviewData;

const ReviewItem: React.FC<ReviewItemProps> = ({
  author,
  content,
  createdAt,
  movieId,
  id,
}) => {
  return (
    <div className={classes.commentContainer}>
      <div className={classes.author}>{author}</div>
      <div className={classes.date}>{new Date(createdAt).toLocaleString()}</div>
      <div className={classes.content}>{content}</div>
      <button className={classes.deleteItem}>
        <ReviewItemDeleteBtn movieId={movieId} reviewId={id} />
      </button>
    </div>
  );
};

export default ReviewItem;
