export function chooseFirstPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
}
export function shuffleTurnOrder(players) {
    return [...players].sort(() => Math.random() - 0.5);
}
export function splitIntoTeams(players, numTeams) {
    const shuffled = shuffleTurnOrder(players);
    return Array.from({ length: numTeams }, (_, i) => shuffled.filter((_, idx) => idx % numTeams === i));
}
