export const withFetch = async <T>(cb: () => Promise<Response>): Promise<T> => {
  try {
    const response = await cb();
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw new Error("알 수 없는 에러");
    }
  }
};
