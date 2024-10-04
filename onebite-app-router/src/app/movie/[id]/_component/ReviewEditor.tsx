"use client";

import postReviewAction from "@/actions/create-review.action";
import classes from "./ReviewEditor.module.scss";
import { useActionState, useEffect } from "react";

type ReviewEditorProps = {
  id: string;
};

export interface ReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  movieId: number;
}

const ReviewEditor: React.FC<ReviewEditorProps> = ({ id }) => {
  const [state, formAction, isPending] = useActionState(postReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section className={classes.ReviewFormSection}>
      <h1>Review</h1>
      <form action={formAction}>
        <input type="hidden" name="movieId" value={id} />
        <input
          type="text"
          required
          name="author"
          placeholder="작성자"
          autoComplete="off"
        />
        <input
          type="text"
          required
          name="content"
          placeholder="리뷰 내용"
          className={classes.reviewContent}
          autoComplete="off"
        />
        <button className={classes.deleteBtn} disabled={isPending}>
          작성하기
        </button>
      </form>
    </section>
  );
};

export default ReviewEditor;
