import { Entry } from './types';
import { extractDate } from './extract-date';

export function extractEntry({
  creationDate,
  text,
}: {
  creationDate: string;
  text: string;
}): Entry {
  return {
    date: extractDate(creationDate),
    text,
  };
}
