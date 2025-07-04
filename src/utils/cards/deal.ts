import { Card } from "./card";

export function dealHands(deck: Card[], numHands: number, cardsPerHand: number): Card[][] {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  const hands: Card[][] = Array.from({ length: numHands }, () => []);
  for (let i = 0; i < numHands * cardsPerHand; i++) {
    hands[i % numHands].push(shuffled[i]);
  }
  return hands;
}