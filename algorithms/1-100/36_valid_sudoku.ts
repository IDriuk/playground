/* 
  36. Valid Sudoku
  Determine if a 9x9 sudoku board is valid.
  Only the filled cells need to be validated according to the following rules:
  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

  A partially filled sudoku which is valid.

  The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
*/

export function isValidSudoku(board: string[][]): boolean {
  let row: boolean[][] = Array(9)
    .fill(null)
    .map(() => Array(9).fill(false));
  let col: boolean[][] = Array(9)
    .fill(null)
    .map(() => Array(9).fill(false));
  let boxes: boolean[][] = Array(9)
    .fill(null)
    .map(() => Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        let num = +board[i][j] - 1;
        let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (row[i][num] || col[j][num] || boxes[box][num]) {
          return false;
        }
        row[i][num] = col[j][num] = boxes[box][num] = true;
      }
    }
  }

  return true;
}
