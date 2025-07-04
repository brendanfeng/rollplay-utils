import { Card } from './card';
/**
 * Deals `handSize` cards to `numHands` players from the given deck.
 * Returns a tuple: [remainingDeck, hands]
 */
export declare function dealHands(deck: Card[], numHands: number, handSize: number): [Card[], Card[][]];
