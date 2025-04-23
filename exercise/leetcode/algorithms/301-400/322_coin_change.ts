/*
  322. Coin Change
  You are given coins of different denominations and a total amount of money.
  Write a function to compute the fewest number of coins that you need to make up that  amount.
  If that amount of money cannot be made up by any combination of the coins, return -1.
*/

export function coinChange(coins: number[], amount: number) {
  if (amount < 1) {
    return 0;
  }
  return change(coins, amount, new Array(amount).fill(0));
}

function change(coins: number[], rem: number, count: number[]) {
  if (rem < 0) {
    return -1;
  }
  if (rem == 0) {
    return 0;
  }
  if (count[rem - 1] != 0) {
    return count[rem - 1];
  }
  let min = Infinity;
  for (let coin of coins) {
    let res = change(coins, rem - coin, count)!;
    if (res >= 0 && res < min) {
      min = 1 + res;
    }
  }
  count[rem - 1] = min == Infinity ? -1 : min;
  return count[rem - 1];
}
