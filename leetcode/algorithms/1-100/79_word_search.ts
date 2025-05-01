/*
  79. Word search
  Given a 2D board and a word, find if the word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cell,
  where "adjacent" cells are those horizontally or vertically neighboring.
  The same letter cell may not be used more than once.
*/

function backtrack(
  board: string[][],
  i: number,
  j: number,
  word: string,
  pos: number,
): boolean {
  if (word.length == pos) {
    return true;
  }

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] != word.charAt(pos)
  ) {
    return false;
  }

  board[i][j] = "#";
  let res =
    backtrack(board, i - 1, j, word, pos + 1) ||
    backtrack(board, i + 1, j, word, pos + 1) ||
    backtrack(board, i, j - 1, word, pos + 1) ||
    backtrack(board, i, j + 1, word, pos + 1);
  board[i][j] = word.charAt(pos);
  return res;
}

export function wordSearch(board: string[][], word: string): boolean {
  if (
    board == null ||
    board.length == 0 ||
    board[0].length == 0 ||
    word == null
  ) {
    return false;
  }

  if (word.length == 0) {
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word.charAt(0)) {
        if (backtrack(board, i, j, word, 0)) {
          return true;
        }
      }
    }
  }

  return false;
}
