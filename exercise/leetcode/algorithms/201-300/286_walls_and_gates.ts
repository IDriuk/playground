/*
  286. Walls and Gates
  You are given a m x n 2D grid initialized with these three possible values.
  -1 - A wall or an obstacle.
  0 - A gate.
  INF - Infinity means an empty room.
  We use the value 231 to represent INF as you may assume that the distance to a gate is less than 231.

  Fill each empty room with the distance to its nearest gate.
  If it is impossible to reach a gate, it should be filled with INF.
*/

const EMPTY = Infinity;
const GATE = 0;
const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

export function wallsAndGates(rooms: number[][]) {
  let m = rooms.length;
  if (m == 0) {
    return;
  }
  let n = rooms[0].length;
  let q: number[][] = [];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (rooms[row][col] == GATE) {
        q.push([row, col]);
      }
    }
  }

  while (q.length > 0) {
    let point = q.shift()!;
    let row = point[0];
    let col = point[1];
    for (let direction of DIRECTIONS) {
      let r = row + direction[0];
      let c = col + direction[1];
      if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != EMPTY) {
        continue;
      }
      rooms[r][c] = rooms[row][col] + 1;
      q.push([r, c]);
    }
  }

  return rooms;
}
