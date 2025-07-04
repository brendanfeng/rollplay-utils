"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipCoins = flipCoins;
function flipCoins(n, weight) {
    if (weight === void 0) { weight = 0.5; }
    return Array.from({ length: n }, function () {
        return Math.random() < weight ? "Heads" : "Tails";
    });
}
