import { flipCoins } from '../src/utils/coin';

describe('flipCoins', () => {
  it('returns correct number of results', () => {
    const flips = flipCoins(10);
    expect(flips).toHaveLength(10);
  });

  it('only returns Heads or Tails', () => {
    const flips = flipCoins(100);
    for (const flip of flips) {
      expect(['Heads', 'Tails']).toContain(flip);
    }
  });

  it('respects weight bias', () => {
    const flips = flipCoins(1000, 0.8);
    const heads = flips.filter(f => f === 'Heads').length;
    expect(heads).toBeGreaterThan(700);
  });
});