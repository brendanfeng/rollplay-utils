export function rollDice(times, sides) {
    return Array.from({ length: times }, () => Math.floor(Math.random() * sides) + 1);
}
