import { rollDice } from '../src/utils/dice';

describe('rollDice', () => {
  it('rolls correct number of dice', () => {
    const rolls = rollDice(5, 6);
    expect(rolls).toHaveLength(5);
  });

  it('returns numbers within range', () => {
    const rolls = rollDice(10, 8);
    for (const roll of rolls) {
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(8);
    }
  });

  it('works with d20s', () => {
    const rolls = rollDice(3, 20);
    for (const roll of rolls) {
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(20);
    }
  });
});
