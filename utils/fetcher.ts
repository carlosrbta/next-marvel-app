import { getBaseUrl } from './getBaseUrl';

export const fetcher = (url: any) =>
  fetch(`${getBaseUrl()}${url}`).then((res) => res.json());
