/*
  48. Rotate Image
  You are given an matrix nxn 2D representing an image.
  Rotate an image by 90 degrees (clockwise).

  Note:
  You have to rotate  the image in place, which means you have to modify the input 2D matrix directly.
  Do not allocate another 2D matrix and do the rotation
*/

export function rotateImage(m: number[][]): number[][] {
  if (m == null || m.length == 0 || m[0].length == 0) {
    return m;
  }

  let n = m.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      let tmp = m[i][j];
      m[i][j] = m[n - j - 1][i];
      m[n - j - 1][i] = m[n - i - 1][n - j - 1];
      m[n - i - 1][n - j - 1] = m[j][n - i - 1];
      m[j][n - i - 1] = tmp;
    }
  }

  return m;
}
