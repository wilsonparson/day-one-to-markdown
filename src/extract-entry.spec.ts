import { extractEntry } from './extract-entry';
import mockEntry from './__mocks__/entry.mock.json';
import { Entry } from './types';

test('extracts entry date and text, preserving line breaks', () => {
  const expected: Entry = {
    date: {
      year: '2018',
      month: '09',
      day: '15',
    },
    text: `# The 7 Habits it Highly Effective People\n- If you want to be more effective, you need to change your character, not your personality or skills.\n- You need to change your paradigm--the way you see the world.\n\n# 1. Be Proactive\nDon’t react automatically to stimuli. You have freedom to choose how you want to act. Commit to a 30-day proactivity challenge.\n\n# 2. Begin with the End in Mind\nCommit time to visualization. Visualize the end you want to achieve before you start. This applies to smaller things like projects as well as to your life.`,
  };
  expect(extractEntry(mockEntry)).toEqual(expected);
});
