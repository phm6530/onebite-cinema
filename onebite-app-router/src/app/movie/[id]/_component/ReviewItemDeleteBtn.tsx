"use client";

import deleteReviewAction from "@/actions/delete-review.action";
import React, { useActionState, useEffect, useRef } from "react";

type ReviewItemDeleteBtnProps = {
  movieId: number;
  reviewId: number;
};
const ReviewItemDeleteBtn: React.FC<ReviewItemDeleteBtnProps> = ({
  movieId,
  reviewId,
}) => {
  const [state, formAction] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert("삭제에러");
    }
  }, [state]);

  const ref = useRef<HTMLFormElement>(null);

  return (
    <form ref={ref} action={formAction}>
      <input type="hidden" name="movieId" value={movieId} hidden />
      <input type="hidden" name="reviewId" value={reviewId} hidden />
      <div onClick={() => ref.current?.requestSubmit()}>리뷰 삭제하기</div>
    </form>
  );
};

export default ReviewItemDeleteBtn;
