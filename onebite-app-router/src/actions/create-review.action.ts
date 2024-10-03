"use server";
import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import delay from "@/util/delay";
import { error } from "console";
import { revalidatePath } from "next/cache";

const postReviewAction = async (state: any, formData: FormData) => {
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();

  if (!author || !content || !movieId) {
    return {
      status: false,
      error: "리뷰 내용을 설정해주세요",
    };
  }

  await withFetch(async () => {
    await delay(2000);
    return fetch(`${BASE_URL}/review`, {
      method: "POST",
      body: JSON.stringify({
        movieId,
        content,
        author,
      }),
    });
  });

  //초기화
  revalidatePath(`/movie/${movieId}`);
};

export default postReviewAction;
