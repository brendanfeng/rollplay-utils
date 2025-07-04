const fantasyNames = ["Arin", "Kael", "Mira", "Thorne", "Lirael"];
export function randomName(): string {
  return fantasyNames[Math.floor(Math.random() * fantasyNames.length)];
}