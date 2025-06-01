// Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// https://leetcode.com/problems/pascals-triangle/
// connect: interesting

var generate = function(numRows: number) {
  if (numRows == 0) return []
  
  let triangle = [[1]]
  let i = 1
  
  while (i < numRows) {
      let row = []
      let prevRow = triangle[i - 1]
      
      for (let j = 0; j <= i; j++) {
          let v1 = prevRow[j - 1] || 0
          let v2 = prevRow[j] || 0
          row.push(v1 + v2)
      }
      
      triangle.push(row)
      i++
  }
  
  return triangle
};

test("pascal's triangle", () => {
  expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
  expect(generate(1)).toEqual([[1]])
})