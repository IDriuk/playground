// Best Time to Buy and Sell Stock with Cooldown
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// connect: undefined

function maxProfit(prices: number[]) {
  let n = prices.length;
  if(n == 0) return 0;
  let stock = -prices[0];
  let money = 0;
  let prev_money = 0;
  for(let i = 1; i < n; i++){
    stock = Math.max(stock, prev_money - prices[i]);
    prev_money = money;
    money = Math.max(stock + prices[i], money);
  }
  return money;
};

test("best time to buy and sell with cooldown", () => {
  expect(maxProfit([1,2,3,0,2])).toBe(3)
})
