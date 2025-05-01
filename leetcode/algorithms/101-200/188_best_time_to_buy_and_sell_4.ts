/*
  188. Best Time to Buy and Sell Stock IV
  Say you have an array for which the ith element is the price of a given stock on day i.

  Design an algorithm to find the maximum profit. You may complete at most k transactions.

  Note: 
  You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

export function maxProfit4(k: number, prices: number[]): number {
  if (prices == null || prices.length < 2 || k == 0) {
    return 0;
  }

  let n = prices.length;
  let res = 0;

  if (k >= ~~(n / 2)) {
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        res += prices[i] - prices[i - 1];
      }
    }
    return res;
  }

  let dp: number[][] = Array(k + 1)
    .fill(null)
    .map((_) => Array(n + 1).fill(0));

  for (let i = 1; i <= k; i++) {
    let curMax = -Infinity;
    for (let j = 0; j < n; j++) {
      dp[i][j + 1] = Math.max(
        Math.max(dp[i - 1][j + 1], dp[i][j]),
        prices[j] + curMax,
      );
      curMax = Math.max(curMax, dp[i - 1][j] - prices[j]);
    }
  }

  return dp[k][n];
}
