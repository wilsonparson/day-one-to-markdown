// This file is an example and can be deleted

import { greet } from './example';

describe('greet', () => {
  it('returns a greeting with the name provided', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});