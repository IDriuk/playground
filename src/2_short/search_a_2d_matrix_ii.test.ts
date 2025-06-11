// Search a 2D Matrix II
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// https://leetcode.com/problems/search-a-2d-matrix-ii/
// connect: undefined


var searchMatrix = function(matrix: number[][], target: number) {
  let row = matrix.length - 1
  let col = 0
  
  while (row >= 0 && col < matrix[0].length) {
      if (matrix[row][col] > target) {
          row--
      } else if (matrix[row][col] < target) {
          col++
      } else {
          return true
      }
  }
  
  return false
};

test(" search a 2d matrix", () => {
  expect(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)).toBe(true)
  expect(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20)).toBe(false)
})