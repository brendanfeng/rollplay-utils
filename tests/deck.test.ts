import { generateDeck } from '../src/utils/cards/deck';
import { Card } from '../src/utils/cards/card';

describe('generateDeck', () => {
  it('generates 52 cards without jokers', () => {
    const deck = generateDeck();
    expect(deck).toHaveLength(52);
  });

  it('generates 54 cards with jokers', () => {
    const deck = generateDeck(true);
    expect(deck).toHaveLength(54);
    const jokers = deck.filter(card => card.rank === 'Joker');
    expect(jokers.length).toBe(2);
  });

  it('produces Card instances', () => {
    const deck = generateDeck();
    expect(deck[0]).toBeInstanceOf(Card);
  });
});
