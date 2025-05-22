// Maximal Rectangle
// Given a rows x cols binary matrix filled with 0's and 1's, 
// find the largest rectangle containing only 1's and return its area.
// https://leetcode.com/problems/maximal-rectangle/
// connect: dp, interesting, minmax


var maximalRectangle = function(matrix: string[][]) {
  if (matrix.length == 0) {
      return 0
  }
  let height = matrix.length
  let width = matrix[0].length
  
  let dp = new Array(height + 1)
      .fill(null)
      .map( _ => new Array(width + 1).fill([0, 0]))
  
  let max = 0
  
  for (let i = 1; i < height + 1; i++) {
      for (let j = 1; j < width + 1; j++) {
          if (matrix[i - 1][j - 1] != "0") {
              dp[i][j] = [
                  dp[i][j - 1][0] + 1, 
                  dp[i - 1][j][1] + 1
              ]
              
              let k = 0
              let maxW = Infinity
              while (dp[i - k][j][1]) {
                  let h = k + 1
                  let w = dp[i - k][j][0]
                  if (w < maxW) { maxW = w }
                  let area = h * maxW
                  if (area > max) {
                      max = area
                  }
                  k++
              }
              
          } else {
              dp[i][j] = [0, 0]
          }
      }
  }
  
  return max
};

test("maximal rectangle", () => {
  expect(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]])).toBe(6)
  expect(maximalRectangle([["0"]])).toBe(0)
  expect(maximalRectangle([["1"]])).toBe(1)
})