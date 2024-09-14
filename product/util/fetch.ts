//Front
export const withFetch = async <T>(
  callback: () => Promise<Response>
): Promise<T> => {
  try {
    const response = await callback();
    if (!response.ok) {
      try {
        const errorMsg = await response.json();
        throw new Error(errorMsg.message);
      } catch (error) {
        throw new Error("서버가 응답하지 않습니다.");
      }
    }
    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "알 수 없는 에러");
    } else {
      throw new Error("알 수 없는 에러");
    }
  }
};
