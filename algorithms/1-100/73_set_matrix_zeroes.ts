/*
  73. Set Matrix Zeroes

  Given a m x n matrix , if an element is 0, set its entire row and column to 0.
  Do it in-place.
*/

export function setMatrixZeroes(matrix: number[][]): number[][] {
  let isCol = false;
  let R = matrix.length;
  let C = matrix[0].length;

  for (let i = 0; i < R; i++) {
    if (matrix[i][0] == 0) {
      isCol = true;
    }

    for (let j = 1; j < C; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < C; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < R; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}
