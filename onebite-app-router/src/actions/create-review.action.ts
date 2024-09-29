import { BASE_URL } from "@/config/baseUrl";
import { withFetch } from "@/lib/fetch";
import { revalidatePath } from "next/cache";

const postReviewAction = async (formData: FormData) => {
  "use server";
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();

  if (!author || !content) {
    return;
  }

  await withFetch(async () => {
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
