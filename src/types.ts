export interface EntryDate {
  year: string;
  month: string;
  day: string;
}

export interface Entry {
  date: EntryDate;
  text: string;
}
