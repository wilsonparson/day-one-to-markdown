import { Entry } from './types';

export function extractEntry({
  creationDate,
  text,
}: {
  creationDate: string;
  text: string;
}): Entry {
  const date = new Date(creationDate);
  return {
    date: {
      year: String(date.getUTCFullYear()),
      month: String(date.getUTCMonth() + 1).padStart(2, '0'),
      day: String(date.getUTCDate()).padStart(2, '0'),
    },
    text,
  };
}
