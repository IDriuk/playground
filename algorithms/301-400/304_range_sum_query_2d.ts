/*
  304. Range Sum Query 2D - Immutable
  Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) 
  and lower right corner (row2, col2).
*/

export function rangeSumQuery2D(matrix: number[][]) {
  let dp: number[][] = Array(matrix.length + 1)
    .fill(null)
    .map((_) => Array(matrix[0].length + 1).fill(0));

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      dp[r + 1][c + 1] = dp[r + 1][c] + dp[r][c + 1] + matrix[r][c] - dp[r][c];
    }
  }

  return (row1: number, col1: number, row2: number, col2: number) => {
    return (
      dp[row2 + 1][col2 + 1] -
      dp[row1][col2 + 1] -
      dp[row2 + 1][col1] +
      dp[row1][col1]
    );
  };
}
