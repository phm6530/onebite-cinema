import { ReviewData } from "@/app/movie/[id]/_component/ReviewEditor";
import classes from "./ReviewItem.module.scss";

const ReviewItem: React.FC<ReviewData> = ({ author, content, createdAt }) => {
  return (
    <div className={classes.commentContainer}>
      <div className={classes.author}>{author}</div>
      <div className={classes.date}>{new Date(createdAt).toLocaleString()}</div>
      <div className={classes.content}>{content}</div>
      <button className={classes.deleteItem}>리뷰 삭제하기</button>
    </div>
  );
};

export default ReviewItem;
