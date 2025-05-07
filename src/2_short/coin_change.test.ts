// Coin Change
// You are given an integer array coins representing coins of different denominations 
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// https://leetcode.com/problems/coin-change/
// connect: dp, interesting

var coinChange = function(coins: number[], amount: number) {
  let max = amount + 1
  let dp = new Array(max).fill(max)
  dp[0] = 0
    
  for ( let i = 1; i <= amount; i++ ) {
      for  ( let c of coins ) {
          if (c <= i) {
              dp[i] = Math.min(dp[i], dp[i - c] + 1)
          }
      }
  }
    
  return dp[amount] > amount ? -1 : dp[amount]
};

test("should return the fewest number of coins that you need to make up that amount", () => {
  expect(coinChange([1,2,5], 11)).toBe(3)
  expect(coinChange([2], 3)).toBe(-1)
  expect(coinChange([1], 0)).toBe(0)
})