import { existsSync, mkdirSync } from 'fs';
import { Entry } from './types';

export function appendEntry(entry: Entry): void {
  const { year, month } = entry.date;
  if (!existsSync(year)) {
    mkdirSync(year);
  }

  if (!existsSync(`${year}/${month}`)) {
    mkdirSync(`${year}/${month}`);
  }
}
