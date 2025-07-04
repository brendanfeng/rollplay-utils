export function dealHands(deck, numHands, cardsPerHand) {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    const hands = Array.from({ length: numHands }, () => []);
    for (let i = 0; i < numHands * cardsPerHand; i++) {
        hands[i % numHands].push(shuffled[i]);
    }
    return hands;
}
