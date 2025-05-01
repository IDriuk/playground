/*
  265. Paint House II
  There are a row of n houses,
  each house can be painted with one of the k colors.
  The cost of painting each house with a certain color is different.
  You have to paint all the houses such that no two adjacent houses have the same color.

  The cost of painting each house with a certain color is represented by a n x k cost matrix.
  For example, costs[0][0] is the cost of painting house 0 with color 0;
  costs[1][2] is the cost of painting house 1 with color 2, and so on...
  Find the minimum cost to paint all houses.

  Note:
  All costs are positive integers.
*/

export function paintHouse2(costs: number[][]) {
  if (costs == null || costs.length == 0 || costs[0].length == 0) {
    return 0;
  }

  let n = costs.length;
  let k = costs[0].length;
  if (k == 1) {
    return n == 1 ? costs[0][0] : -1;
  }

  let min = 0;
  let secMin = 0;
  let prevColor = -1;

  for (let i = 0; i < n; i++) {
    let curMin = Infinity;
    let curSecMin = Infinity;
    let curColor = -1;

    for (let j = 0; j < k; j++) {
      let val = costs[i][j] + (j == prevColor ? secMin : min);
      if (curColor == -1) {
        curMin = val;
        curColor = j;
      } else if (val < curMin) {
        curSecMin = curMin;
        curMin = val;
        curColor = j;
      } else if (val < curSecMin) {
        curSecMin = val;
      }
    }
    min = curMin;
    prevColor = curColor;
    secMin = curSecMin;
  }
  return min;
}
