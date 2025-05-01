/*
  122. Best Time to Buy and Sell Stock II.
  Say you have an array for which the ith element is the price of a given stock on day i.
  
  Design an algorithm to find the maximum profit. 
  You may complete  at most two transactions.

  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

export function maxProfit3(prices: number[]): number {
  let maxProfit = 0;
  if (prices == null || prices.length < 2) {
    return maxProfit;
  }

  let len = prices.length;
  let maxBy: number[] = Array(len).fill(0);
  let maxSince: number[] = Array(len).fill(0);
  let valley = prices[0];
  let peak = prices[len - 1];

  for (let i = 1; i < len; i++) {
    valley = Math.min(valley, prices[i]);
    maxBy[i] = Math.max(maxBy[i - 1], prices[i] - valley);
  }

  for (let i = len - 2; i >= 0; i--) {
    peak = Math.max(peak, prices[i]);
    maxSince[i] = Math.max(maxSince[i + 1], peak - prices[i]);
    maxProfit = Math.max(maxProfit, maxBy[i] + maxSince[i]);
  }

  return maxProfit;
}
