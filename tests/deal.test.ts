import { generateDeck } from '../src/utils/cards/deck';
import { dealHands } from '../src/utils/cards/deal';
import { Card } from '../src/utils/cards/card';

describe('dealHands', () => {
  it('deals correct number of hands with correct hand size', () => {
    const deck = generateDeck();
    const [remainingDeck, hands] = dealHands(deck, 4, 5);

    expect(hands.length).toBe(4); // 4 hands
    hands.forEach(hand => {
      expect(hand.length).toBe(5);
      hand.forEach(card => expect(card).toBeInstanceOf(Card));
    });
  });

  it('removes dealt cards from the deck (returns remaining deck)', () => {
    const deck = generateDeck();
    const originalLength = deck.length;
    const [remainingDeck, hands] = dealHands(deck, 2, 10); // 20 cards dealt
    const totalDealt = hands.flat().length;

    expect(totalDealt).toBe(20);
    expect(remainingDeck.length).toBe(originalLength - 20);
  });

  it('returns fewer cards if deck is too small', () => {
    const smallDeck = generateDeck().slice(0, 5); // Only 5 cards
    const [remainingDeck, hands] = dealHands(smallDeck, 2, 5);

    const totalDealt = hands.flat().length;
    expect(totalDealt).toBeLessThanOrEqual(5);
    expect(remainingDeck.length).toBeGreaterThanOrEqual(0);
  });
});
