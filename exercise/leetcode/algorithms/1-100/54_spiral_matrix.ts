/* 
  54. Spiral Matrix
  Given a matrix of mxn elements (m rows, n columns),
  return all elements of the matrix in spiral order.
*/

export function spiralMatrix(m: number[][]): number[] {
  let ans: number[] = [];
  let l = 0;
  let t = 0;
  let b = m.length - 1;
  let r = m[0].length - 1;
  let len = m.length * m[0].length;
  while (true) {
    for (let i = l; i <= r; i++) {
      ans.push(m[t][i]);
      if (ans.length == len) {
        return ans;
      }
    }
    t++;

    for (let i = t; i <= b; i++) {
      ans.push(m[i][r]);
      if (ans.length == len) {
        return ans;
      }
    }
    r--;

    for (let i = r; i >= l; i--) {
      ans.push(m[b][i]);
      if (ans.length == len) {
        return ans;
      }
    }
    b--;

    for (let i = b; i >= t; i--) {
      ans.push(m[i][l]);
      if (ans.length == len) {
        return ans;
      }
    }
    l++;
  }
}
