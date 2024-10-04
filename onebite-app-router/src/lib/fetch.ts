export class CustomError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const withFetch = async <T>(cb: () => Promise<Response>): Promise<T> => {
  try {
    const response = await cb();
    if (!response.ok) {
      const errorRes = await response.json();
      throw new CustomError(errorRes.message, response.status);
    }
    return response.json();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(error);
      throw error;
    }
    throw new CustomError((error as Error).message || "네트워크 오류", 500);
  }
};
