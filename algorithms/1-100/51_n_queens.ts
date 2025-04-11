/* 
  51. N-Queens 

  The n-queens puzzle is the problem of placing n queens on an n*n chessboard such that no two queens attack each other.

  Given an integer n, return all distinct solutions to the n-queens puzzle.

  Each solution has a distinct board configuration of the n-queens placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
*/

export function nQueens(n: number): string[][] {
  let res: string[][] = [];

  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();

  let board = Array(n)
    .fill(null)
    .map(() => Array(n).fill("."));

  let backtrack = (r: number) => {
    if (r == n) {
      let copy = [];
      for (let row of board) {
        copy.push(row.join(""));
      }
      res.push(copy);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      }

      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = "Q";

      backtrack(r + 1);

      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = ".";
    }
  };

  backtrack(0);
  return res;
}
