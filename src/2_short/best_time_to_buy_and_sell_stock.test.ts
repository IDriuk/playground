// Best Time to Buy and Sell Stock 
// You are given an array of prices where prices[i] is the price of a given stock on the i-th day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// connect: interesting, minmax


function maxProfit(prices: number[]) {
    let minprice = Infinity;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice)
            minprice = prices[i];
        else if (prices[i] - minprice > maxprofit)
            maxprofit = prices[i] - minprice;
    }
    return maxprofit;
}


test("should return maximum profit for best time transaction", () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5)
})