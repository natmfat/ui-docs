// https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b

export async function tryCatch<T, E = Error>(promise: T | Promise<T>) {
  try {
    const data = await promise;
    return [data, undefined] as const;
  } catch (error) {
    return [undefined, error as E] as const;
  }
}
