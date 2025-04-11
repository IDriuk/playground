/*
  348. Design Tic-Tac-Toe
  Design a Tic-tac-toe game that is played between two players on a n x n grid.
  You may assume the following rules:
  A move is guaranteed to be valid and is placed on an empty block.
  Once a winning condition is reached, no more moves is allowed.
  A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
*/

export class TicTacToe {
  rows: number[] = [];
  cols: number[] = [];
  diagonal: number = 0;
  antiDiagonal: number = 0;

  constructor(n: number) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
  }

  move = (row: number, col: number, player: number) => {
    let toAdd = player == 1 ? 1 : -1;

    this.rows[row] += toAdd;
    this.cols[col] += toAdd;
    if (row == col) {
      this.diagonal += toAdd;
    }
    if (col == this.cols.length - 1 - row) {
      this.antiDiagonal += toAdd;
    }

    let size = this.rows.length;
    if (
      Math.abs(this.rows[row]) == size ||
      Math.abs(this.cols[col]) == size ||
      Math.abs(this.diagonal) == size ||
      Math.abs(this.antiDiagonal) == size
    ) {
      return player;
    }

    return 0;
  };
}
