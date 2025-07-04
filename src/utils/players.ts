export function chooseFirstPlayer(players: string[]): string {
  return players[Math.floor(Math.random() * players.length)];
}

export function shuffleTurnOrder(players: string[]): string[] {
  return [...players].sort(() => Math.random() - 0.5);
}

export function splitIntoTeams(players: string[], numTeams: number): string[][] {
  const shuffled = shuffleTurnOrder(players);
  return Array.from({ length: numTeams }, (_, i) =>
    shuffled.filter((_, idx) => idx % numTeams === i)
  );
}