export interface Response<T> {
  readonly data: T;
  readonly status?: "success" | "error";
  readonly message: string;
}
