// Unique Paths
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths 
// that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.
// https://leetcode.com/problems/unique-paths/submissions/
// connect: interesting, dp

var uniquePaths = function(n: number, m: number) {
  let grid: number[][] = []
  
  for (let i = 0; i < n; i++) {
      grid[i] = [1]
  }

  for (let i = 0; i < m; i++) {
      grid[0][i] = 1
  }

  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
      }
  }
    
  return grid[n - 1][m - 1]
};

test("unique paths", () => {
  expect(uniquePaths(3, 7)).toBe(28)
  expect(uniquePaths(3, 2)).toBe(3)
})