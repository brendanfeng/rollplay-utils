const fantasyNames = ["Arin", "Kael", "Mira", "Thorne", "Lirael"];
export function randomName() {
    return fantasyNames[Math.floor(Math.random() * fantasyNames.length)];
}
