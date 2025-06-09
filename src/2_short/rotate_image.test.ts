// Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.
// https://leetcode.com/problems/rotate-image/submissions/
// connect: interesting

export var rotate = function(matrix: number[][]) {
  let len = matrix.length
  let deep = 0
  
  while (len - deep * 2 > 1) {
      for (let i = deep; i < len - deep - 1; i++) {
          let q = [
              matrix[deep][i],
              matrix[i][len - deep - 1],
              matrix[len - deep - 1][len - i - 1],
              matrix[len - i - 1][deep]
          ]
          
          matrix[i][len - deep - 1] = q[0]
          matrix[len - deep - 1][len - i - 1] = q[1] 
          matrix[len - i - 1][deep] = q[2]
          matrix[deep][i] = q[3]
      }
      
      deep++
  }
  
  return matrix
};

test(" rotate image ", () => {
  expect(rotate([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]])
  expect(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
})