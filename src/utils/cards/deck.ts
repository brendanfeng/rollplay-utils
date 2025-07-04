import { Card } from "./card";

const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function generateDeck(includeJokers = false): Card[] {
  const deck = SUITS.flatMap(suit =>
    RANKS.map(rank => new Card(rank, suit))
  );
  if (includeJokers) deck.push(new Card("Joker", "Red"), new Card("Joker", "Black"));
  return deck;
}