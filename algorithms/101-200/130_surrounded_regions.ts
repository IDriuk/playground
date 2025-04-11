/*
  130. Surrounded Regions
  Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
  A region is captured by flipping all 'O's into 'X's in that surrouded region.
*/

export function surrondedRegions(board: string[][]) {
  if (board == null || board.length == 0 || board[0].length == 0) {
    return;
  }

  let q: number[] = [];
  let m = board.length;
  let n = board[0].length;
  let visited = Array(m)
    .fill(null)
    .map((_) => Array(n).fill(false));
  let dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "O" && !visited[i][j]) {
        let surround = true;
        let pointsToChange: number[] = [];
        q.push(i * n + j);
        visited[i][j] = true;
        while (q.length > 0) {
          let point = q.shift()!;
          pointsToChange.push(point);
          let x = Math.floor(point / n);
          let y = point % n;
          for (let k = 0; k < dir.length; k++) {
            let nextX = x + dir[k][0];
            let nextY = y + dir[k][1];
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
              if (board[nextX][nextY] == "O" && !visited[nextX][nextY]) {
                q.push(nextX * n + nextY);
              }
              visited[nextX][nextY] = true;
            } else {
              surround = false;
            }
          }
        }
        if (surround) {
          for (let p of pointsToChange) {
            board[Math.floor(p / n)][p % n] = "X";
          }
        }
      }
    }
  }
}
