// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
// which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.
// https://leetcode.com/problems/minimum-path-sum/

var minPathSum = function(grid: number[][]) {
    
  let n = grid.length
  let m = grid[0].length
  
  for (let i = 1; i < m; i++) {
      grid[0][i] += grid[0][i - 1]
  }
  
  for (let i = 1; i < n; i++) {
      grid[i][0] += grid[i - 1][0]
  }
  
  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
      }
  }
  
  return grid[n - 1][m - 1]
};

test("minimum path sum", () => {
  expect(minPathSum([[1,3,1],[1,5,1],[4,2,1]])).toBe(7)
  expect(minPathSum([[1,2,3],[4,5,6]])).toBe(12)
})