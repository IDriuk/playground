/*
  62. Unique Paths
  A robot is located at the top-left corner of a mxn grid (marked 'start' in the diagram below).
  A robot can only move either down or right at any point in time.
  The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
  
  How many possible unique paths are there?

  Above is a 7x3 grid. How many possible unique paths are there?

  Note: m and n will be at most 100.
*/

let paths = Array(101)
  .fill(null)
  .map(() => Array(101).fill(0));

export function uniquePaths(m: number, n: number): number {
  if (m <= 0 || n <= 0) return 0;
  if (m == 1 || n == 1) return 1;
  if (paths[m][n] == 0) {
    paths[m][n] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }
  return paths[m][n];
}
