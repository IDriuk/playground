/*
  311. Sparse Matrix Multiplication
  Given two sparse matrices A and B, return the result of AB.

  You may assume that A's column number is equal to B's row number.
*/

export function sparseMatrixMultiplication(A: number[][], B: number[][]) {
  let rA = A.length;
  let cA = A[0].length;
  let cB = B[0].length;
  let res = Array(rA)
    .fill(null)
    .map((_) => Array(cB).fill(0));

  for (let i = 0; i < rA; i++) {
    for (let j = 0; j < cA; j++) {
      if (A[i][j] == 0) {
        continue;
      }
      for (let k = 0; k < cB; k++) {
        if (B[j][k] == 0) {
          continue;
        }
        res[i][k] += A[i][j] * B[j][k];
      }
    }
  }

  return res;
}
