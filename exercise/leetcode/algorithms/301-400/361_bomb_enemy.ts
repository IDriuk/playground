/*
  361. Bomb Enemy
  Given a 2D grid, each cell is either a wall 'W' , an enemy 'E' or empty '0' (the number zero),
  return the maximum enemies you can kill using one bomb.
  The bomb kills all the enemies in the same row and column from the planted point until it hits the wall 
  since the wall is too strong to be destroyed.
  Note:
  You can only put the bomb at an empty cell.
*/

let WALL = "W";
let ENEMY = "E";
let EMPTY = "0";

export function maxKilledEnemies(grid: string[][]) {
  if (grid == null) {
    return 0;
  }
  let m = grid.length;
  let n = m == 0 ? 0 : grid[0].length;
  let maxEnemies = 0;
  let rowHits = 0;
  let colHits: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == WALL) {
        continue;
      }
      if (j == 0 || grid[i][j - 1] == WALL) {
        rowHits = 0;
        for (let k = j; k < n && grid[i][k] != WALL; k++) {
          if (grid[i][k] == ENEMY) {
            rowHits++;
          }
        }
      }
      if (i == 0 || grid[i - 1][j] == WALL) {
        colHits[j] = 0;
        for (let k = i; k < m && grid[k][j] != WALL; k++) {
          if (grid[k][j] == ENEMY) {
            colHits[j]++;
          }
        }
      }
      if (grid[i][j] == EMPTY) {
        maxEnemies = Math.max(rowHits + colHits[j], maxEnemies);
      }
    }
  }
  return maxEnemies;
}
