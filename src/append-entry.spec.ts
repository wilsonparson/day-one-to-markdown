import { appendEntry } from './append-entry';
import { extractEntry } from './extract-entry';
import * as fs from 'fs';
import mockEntryData from './__mocks__/entry.mock.json';

jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

const entry = extractEntry(mockEntryData);

afterEach(() => {
  jest.clearAllMocks();
});

test(`Creates the year folder if it doesn't exist`, () => {
  // Year folder exists
  mockFs.existsSync.mockReturnValue(true);
  appendEntry(entry);
  expect(mockFs.mkdirSync).not.toHaveBeenCalled();

  // Year folder doesn't exist
  mockFs.existsSync.mockReturnValue(false);
  appendEntry(entry);
  expect(mockFs.mkdirSync).toHaveBeenCalledWith('2018');
});

test(`Creates the month folder if it doesn't exist`, () => {
  mockFs.existsSync.mockReturnValue(false);
  appendEntry(entry);
  expect(mockFs.mkdirSync).toHaveBeenCalledWith('2018');
});

test(`Does nothing if month folder already exists`, () => {
  mockFs.existsSync.mockImplementation(path => {
    if (path === '2018' || path === '2018/09') {
      return true;
    }
    return false;
  });
  appendEntry(entry);
  expect(mockFs.mkdirSync).not.toHaveBeenCalled();
});

test(`If the entry file hasn't been created (is empty), creates and writes to the entry file`, () => {
  appendEntry(entry);
  expect(mockFs.appendFileSync).toHaveBeenCalledWith(
    expect.anything(),
    expect.stringMatching(/^# The 7 Habits/),
  );
});

test(`If the entry file already has content in it, adds "---" and appends entry below`, () => {
  mockFs.existsSync.mockReturnValue(true);
  appendEntry(entry);
  expect(mockFs.appendFileSync).toHaveBeenCalledWith(
    expect.anything(),
    expect.stringMatching(/^---/),
  );
});
