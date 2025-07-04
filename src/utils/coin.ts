export function flipCoins(n: number, weight: number = 0.5): string[] {
  return Array.from({ length: n }, () =>
    Math.random() < weight ? "Heads" : "Tails"
  );
}