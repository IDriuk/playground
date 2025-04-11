/*
  279. Perfect Squares
  Given a positive integer n, find the least number of perfect square numbers (for example 1, 4, 9, 16, ...) which sum to n.
*/

export function perfectSquares(n: number) {
  let res = new Array<number>(n + 1).fill(Infinity);
  res[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      res[i] = Math.min(res[i], res[i - j * j] + 1);
    }
  }

  return res[n];
}
