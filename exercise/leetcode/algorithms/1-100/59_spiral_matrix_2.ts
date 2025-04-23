/* 
  59. Spiral Matrix II

  Given a positive integer n, generate a square matrix filled with elements from 1 to n*n  in spiral order. 
*/

export function spiralMatrix2(n: number): number[][] {
  let ar = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));

  let lv = 0;
  let num = 1;
  while (lv < n / 2) {
    for (let i = lv; i < n - lv; i++) {
      ar[lv][i] = num++;
    }
    for (let i = lv + 1; i < n - lv; i++) {
      ar[i][n - lv - 1] = num++;
    }
    for (let i = n - lv - 2; i >= lv; i--) {
      ar[n - lv - 1][i] = num++;
    }
    for (let i = n - lv - 2; i >= lv + 1; i--) {
      ar[i][lv] = num++;
    }
    lv++;
  }

  return ar;
}
