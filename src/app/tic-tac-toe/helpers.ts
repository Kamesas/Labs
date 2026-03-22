import { tTile } from "./types";

export const getInitState = () =>
  Array.from({ length: 9 }, () => ({ mark: null }));

export const WIN_LINES = [
  [0, 1, 2], //rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], //cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
];

export const checkResult = (tiles: tTile[]) => {
  for (const [a, b, c] of WIN_LINES) {
    const first = tiles[a].mark;
    if (!first) continue;
    if (first === tiles[b].mark && first === tiles[c].mark) return first;
  }

  return null;
};
