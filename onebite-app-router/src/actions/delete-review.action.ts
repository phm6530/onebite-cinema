"use server";

import { BASE_URL } from "@/config/baseUrl";
import { revalidatePath } from "next/cache";

const deleteReviewAction = async (_: any, formData: FormData) => {
  const movieId = formData.get("movieId")?.toString();
  const reviewId = formData.get("reviewId")?.toString();
  if (!movieId || !reviewId) {
    return {
      status: false,
    };
  }
  try {
    const response = await fetch(`${BASE_URL}/review/${reviewId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidatePath(`/movie/${movieId}`);
    return {
      status: true,
    };
  } catch (error) {
    return {
      status: false,
    };
  }
};
export default deleteReviewAction;
