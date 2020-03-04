import { extractDate, EntryDate } from './extract-date';

test('converts ISO date string to EntryDate object', () => {
  const received = '2018-09-15T04:01:57Z';
  const expected: EntryDate = {
    year: '2018',
    month: '09',
    day: '15',
  };

  expect(extractDate(received)).toEqual(expected);
});
