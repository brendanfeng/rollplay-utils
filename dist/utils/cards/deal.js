/**
 * Deals `handSize` cards to `numHands` players from the given deck.
 * Returns a tuple: [remainingDeck, hands]
 */
export function dealHands(deck, numHands, handSize) {
    // Copy deck to avoid mutating original
    const deckCopy = [...deck];
    const hands = Array.from({ length: numHands }, () => []);
    for (let cardIndex = 0; cardIndex < handSize; cardIndex++) {
        for (let handIndex = 0; handIndex < numHands; handIndex++) {
            if (deckCopy.length === 0)
                break;
            const card = deckCopy.shift();
            hands[handIndex].push(card);
        }
    }
    return [deckCopy, hands];
}
