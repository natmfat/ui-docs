// https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b

type Success<T> = [T, undefined];
type Failure<E> = [undefined, E];
type Result<T, E> = Success<T> | Failure<E>;

export async function tryCatch<T, E = Error>(
  promise: T | Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return [data, undefined] as const;
  } catch (error) {
    return [undefined, error as E] as const;
  }
}
