/* 
  64. Minimum path sum

  Given a mxn grid filled with not-negative numbers,  
  find a path from top left to bottom right which minimizes the sum of all numbers along its path.
  Note: 
  You can only move either down or right at any point in time
*/

export function minimumPathSum(grid: number[][]): number {
  return calculate(grid, 0, 0);
}

function calculate(grid: number[][], i: number, j: number): number {
  if (i == grid.length || j == grid[0].length) return Infinity;
  if (i == grid.length - 1 && j == grid[0].length - 1) return grid[i][j];
  return (
    grid[i][j] + Math.min(calculate(grid, i + 1, j), calculate(grid, i, j + 1))
  );
}
