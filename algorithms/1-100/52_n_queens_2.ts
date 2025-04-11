/* 
  52. N-Queens II

  The n-queens puzzle is the problem of placing n queens on an n*n chessboard such that no two queens attack each other.

  Given an integer n, return the number of distinct solutions to the n-queens puzzle.

*/

export function nQueens2(n: number): number {
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let count = 0;

  let backtrack = (r: number) => {
    if (r == n) {
      count++;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      }

      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);

      backtrack(r + 1);

      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
    }
  };

  backtrack(0);

  return count;
}
