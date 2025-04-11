/*
  200. Number of Islands.
  Given a 2d grid map of 1's (land) and 0's (water), count the number of islands.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.
*/

export function numberOfIslands(grid: number[][]): number {
  let nr = grid.length;
  if (!nr) {
    return 0;
  }

  let nc = grid[0].length;

  let num_islands = 0;
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] == 1) {
        num_islands++;
        dfs(grid, r, c, nr, nc);
      }
    }
  }

  return num_islands;
}

function dfs(grid: number[][], r: number, c: number, nr: number, nc: number) {
  grid[r][c] = 0;

  if (r - 1 >= 0 && grid[r - 1][c] == 1) {
    dfs(grid, r - 1, c, nr, nc);
  }
  if (r + 1 < nr && grid[r + 1][c] == 1) {
    dfs(grid, r + 1, c, nr, nc);
  }
  if (c - 1 >= 0 && grid[r][c - 1] == 1) {
    dfs(grid, r, c - 1, nr, nc);
  }
  if (c + 1 < nc && grid[r][c + 1] == 1) {
    dfs(grid, r, c + 1, nr, nc);
  }
}
