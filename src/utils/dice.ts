export function rollDice(times: number, sides: number): number[] {
  return Array.from({ length: times }, () =>
    Math.floor(Math.random() * sides) + 1
  );
}