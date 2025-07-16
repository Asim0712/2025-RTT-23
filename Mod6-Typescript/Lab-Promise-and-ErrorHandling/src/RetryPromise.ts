export async function retryPromise<T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return await retryPromise(fn, attempts - 1, delay);
  }
}