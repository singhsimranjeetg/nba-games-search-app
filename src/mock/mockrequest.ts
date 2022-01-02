import { GamesData } from "./gamesByDate";

export const searchMock = (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> =>
  new Promise((resolve) =>
    resolve({
      json: () => Promise.resolve(GamesData),
    } as Response)
  );