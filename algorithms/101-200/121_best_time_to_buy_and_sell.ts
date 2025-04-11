/*
  121. Best Time to Buy and Sell Stock.
  Say you have an array for which the ith element is the price of a given stock on day i.
  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
  design an algorithm to find the maximum profit.
  Note that you cannot sell a stock before you buy one.
*/

export function maxProfit(prices: number[]): number {
  let minprice = Infinity;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
}
