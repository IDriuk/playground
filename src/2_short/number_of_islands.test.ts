// Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
// https://leetcode.com/problems/number-of-islands/submissions/
// connect: recursion

var numIslands = function(grid: (string | number)[][]) {
  let color = 2
  let m = grid.length
  let n = grid[0].length
  
  for (let i = 0; i < m; i++ ) {
      for (let j = 0; j < n; j++) {
          if ( grid[i][j] == "1") {
              paint(i, j, color, true)
          }
      }
  }
  
  return color - 2
  
  function paint(i: number, j: number, c: number, isRoot = false) {
      
      if (grid[i] && grid[i][j] == "1") {
          grid[i][j] = c
          
          paint(i - 1, j, c)
          paint(i, j + 1, c)
          paint(i + 1, j, c)
          paint(i, j - 1, c)
      }
      
      if ( isRoot) { color++ }
  }
};

test(" number of islands", () => {
  expect(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])).toBe(1)
  expect(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])).toBe(3)
})