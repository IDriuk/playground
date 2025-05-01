/*
  74. Search a 2D Matrix.

  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties;
  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.
*/

export function search2DMatrix(matrix: number[][], target: number): boolean {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    let midVal = matrix[Math.floor(mid / n)][mid % n];
    if (midVal == target) {
      return true;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
