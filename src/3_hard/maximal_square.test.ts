// Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
// https://leetcode.com/problems/maximal-square/submissions/
// connect: dp, minmax

var maximalSquare = function(matrix: string[][]) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0
  let max = 0
  
  let dp = new Array(cols + 1).fill(0) 
  let prev = 0 
  
  for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
          let temp = dp[j]
          if (matrix[i - 1][j - 1] == '1') {
              dp[j] = Math.min(dp[j - 1], dp[j], prev) + 1
              max = Math.max(max, dp[j])
          } else {
              dp[j] = 0
          }
          prev = temp
      }
  }
  
  return max * max
};

test("maximal square", () => {
  expect(maximalSquare([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]])).toBe(4)
  expect(maximalSquare([["0","1"],["1","0"]])).toBe(1)
  expect(maximalSquare([["0"]])).toBe(0)
})