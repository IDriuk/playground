/*
  221. Maximal Square
  Given a 2D binary matrix filled with 0's and 1's ,
  find the largest square containing only 1's and return its area.
*/

export function maximalSquare(matrix: number[][]) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let dp = Array(rows + 1)
    .fill(null)
    .map((_) => Array(cols + 1).fill(0));
  let maxsqlen = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] == 1) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i][j]);
      }
    }
  }
  return maxsqlen * maxsqlen;
}
