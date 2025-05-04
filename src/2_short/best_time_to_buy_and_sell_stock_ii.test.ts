// Best Time to Buy and Sell Stock II
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
// connect: minmax

// var maxProfit = function(prices) {
//   const difs = []
//   let min = prices[0]
  
//   for ( let i = 1; i < prices.length; i++ ) {
//       if (prices[i] < min) {
//           min = prices[i]
//       } else if (i == prices.length - 1) {
//           difs.push(prices[i] - min)
//       } else if ( prices[i+1] < prices[i]) {
//           difs.push(prices[i] - min)
//           min = prices[i+1]
//       }
//   }
  
//   const sums = difs.reduce( (ac, val) => ac + val, 0)
  
//   return sums && sums > 0 ? sums : 0
// };


function maxProfit(prices: number[]) {
    let  maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
}

test("max profit from buy and sell stock 2", () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(7)
  expect(maxProfit([1,2,3,4,5])).toBe(4)
  expect(maxProfit([7,6,4,3,1])).toBe(0)
})