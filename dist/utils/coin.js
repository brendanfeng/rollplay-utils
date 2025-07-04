export function flipCoins(n, weight = 0.5) {
    return Array.from({ length: n }, () => Math.random() < weight ? "Heads" : "Tails");
}
