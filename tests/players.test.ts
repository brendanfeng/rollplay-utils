import { chooseFirstPlayer, shuffleTurnOrder, splitIntoTeams } from '../src/utils/players';

const samplePlayers = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];

describe('chooseFirstPlayer', () => {
  it('returns one of the players', () => {
    const first = chooseFirstPlayer(samplePlayers);
    expect(samplePlayers).toContain(first);
  });
});

describe('shuffleTurnOrder', () => {
  it('returns same players in a different order', () => {
    const order = shuffleTurnOrder(samplePlayers);
    expect(order.sort()).toEqual(samplePlayers.sort());
  });

  it('returns a new array instance', () => {
    const order = shuffleTurnOrder(samplePlayers);
    expect(order).not.toBe(samplePlayers);
  });
});

describe('splitIntoTeams', () => {
  it('splits players into given number of teams', () => {
    const teams = splitIntoTeams(samplePlayers, 2);
    expect(teams.length).toBe(2);
    const totalPlayers = teams.flat().length;
    expect(totalPlayers).toBe(samplePlayers.length);
  });

  it('returns empty arrays if team count is greater than player count', () => {
    const teams = splitIntoTeams(['Alice', 'Bob'], 5);
    expect(teams.length).toBe(5);
    expect(teams.flat()).toEqual(expect.arrayContaining(['Alice', 'Bob']));
  });
});
