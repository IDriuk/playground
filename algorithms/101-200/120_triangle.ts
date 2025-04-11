/*
  120. Triangle
  Given a triangle, find the minimum path sum from top to bottom. 
  Each step you may move to adjacent numbers on the row below.
*/

export function triangleMinimumPath(triangle: number[][]): number {
  let level = triangle.length - 1;
  let res = triangle[level];
  for (let i = level - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      let result = Math.min(res[j], res[j + 1]) + triangle[i][j];
      res[j] = result;
    }
  }
  return res[0];
}
