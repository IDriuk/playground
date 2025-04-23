/* 
  85. Maximal Rectangle
  Given a 2D binary matrix filled with 0's and 1's , find the largest rectangle containing only 1's and return its area.
*/

export function maximalRectangle(matrix: string[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = Array(n).fill(0);
  let right = Array(n).fill(n);
  let height = Array(n).fill(0);

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == "1") {
        height[j]++;
      } else {
        height[j] = 0;
      }
    }

    let leftBound = 0;
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == "1") {
        left[j] = Math.max(left[j], leftBound);
      } else {
        left[j] = 0;
        leftBound = j + 1;
      }
    }

    let rightBound = n;
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] == "1") {
        right[j] = Math.min(right[j], rightBound);
      } else {
        right[j] = n;
        rightBound = j;
      }
    }

    for (let j = 0; j < n; j++) {
      max = Math.max(max, (right[j] - left[j]) * height[j]);
    }
  }

  return max;
}
