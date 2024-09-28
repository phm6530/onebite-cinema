const delay = async (delay: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};
export default delay;
