/*
  256. Paint House
  There are a row of n houses,
  each house can be painted with one of the three colors: red, blue or green.
  The cost of painting each house with a certain color is represented by a nx3 cost matrix.
*/

export function paintHouse(costs: number[][]) {
  if (costs.length == 0) {
    return 0;
  }

  let n = costs.length;
  for (let i = 1; i < n; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }
  return Math.min(...costs[n - 1]);
}
