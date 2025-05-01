/*
  289. Game of Life
  According to the Wikipedia's article:
  "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

  Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
  Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules 
  (taken from the above Wikipedia article):

  Any live cell with fewer than two live neighbors dies,, as if caused by under-population.
  Any live cell with two or three live neighbors lives on to the next generation.
  Any live cell with more than three live neighbors dies, as if by over-population.
  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

  Write a function to compute the next state (after one update) of the board given its current state.
  The next state is created by applyig the above rules simultaneously to every cell in the current state,
  where births and deaths occur simultaneously.
*/

export function gameOfLife(board: number[][]) {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let lives = -board[i][j];
      for (let k = Math.max(i - 1, 0); k < Math.min(i + 2, m); k++) {
        for (let l = Math.max(j - 1, 0); l < Math.min(j + 2, m); l++) {
          lives += board[k][l] & 1;
        }
      }

      if ((lives | board[i][j]) == 3) {
        board[i][j] |= 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }

  return board;
}
