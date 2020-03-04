import { EntryDate } from './types';

export function extractDate(creationDate: string): EntryDate {
  const date = new Date(creationDate);
  return {
    year: String(date.getUTCFullYear()),
    month: String(date.getUTCMonth() + 1).padStart(2, '0'),
    day: String(date.getUTCDate()).padStart(2, '0'),
  };
}
