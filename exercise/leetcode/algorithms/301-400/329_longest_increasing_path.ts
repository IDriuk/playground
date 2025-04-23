/*
  329. Longest Increasing Path in a Matrix
  Given an integer matrix, find the length of the longest increasing path.
  From each cell, you can either move to four directions: left, right, up or down.
  You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
*/
let dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export function longestIncreasingPath(grid: number[][]) {
  let m = grid.length;
  if (m == 0) {
    return 0;
  }
  let n = grid[0].length;
  let matrix = Array(m + 2)
    .fill(null)
    .map((_) => Array(n + 2).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i + 1][j + 1] = grid[i][j];
    }
  }

  let outdegree = Array(m + 2)
    .fill(null)
    .map((_) => Array(n + 2).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let d of dir) {
        if (matrix[i][j] < matrix[i + d[0]][j + d[1]]) {
          outdegree[i][j]++;
        }
      }
    }
  }

  n += 2;
  m += 2;

  let leaves: number[][] = [];

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (outdegree[i][j] == 0) {
        leaves.push([i, j]);
      }
    }
  }

  let height = 0;
  while (leaves.length > 0) {
    height++;
    let newLeaves: number[][] = [];
    for (let node of leaves) {
      for (let d of dir) {
        let x = node[0] + d[0];
        let y = node[1] + d[1];
        if (matrix[node[0]][node[1]] > matrix[x][y]) {
          outdegree[x][y]--;
          if (outdegree[x][y] == 0) {
            newLeaves.push([x, y]);
          }
        }
      }
    }
    leaves = newLeaves;
  }
  return height;
}
