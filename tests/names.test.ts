import { randomName } from '../src/utils/names';

describe('randomName', () => {
  it('returns a string', () => {
    const name = randomName();
    expect(typeof name).toBe('string');
    expect(name.length).toBeGreaterThan(0);
  });

  it('returns different names over multiple calls', () => {
    const names = new Set();
    for (let i = 0; i < 10; i++) {
      names.add(randomName());
    }
    expect(names.size).toBeGreaterThan(1); // Should not return same name every time
  });

  it('works consistently across calls', () => {
    const name = randomName();
    expect(name).toMatch(/^[A-Z][a-z]+$/); // Basic pattern test: Capitalized word
  });
});
