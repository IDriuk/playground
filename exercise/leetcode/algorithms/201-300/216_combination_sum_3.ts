/*
  216. Combination Sum III
  Find all possible combinations of k numbers that add up to a number n,
  given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

  Note:
  All numbers will be positive integers.
  The solution set must not contain duplicate combinations.
*/

export function combinationSum3(k: number, n: number) {
  let ans: number[][] = [];
  backtrack(ans, [], k, 1, n);
  return ans;
}

function backtrack(
  ans: number[][],
  comb: number[],
  k: number,
  start: number,
  n: number,
) {
  if (comb.length > k) {
    return;
  }
  if (comb.length == k && n == 0) {
    let res = [...comb];
    ans.push(res);
    return;
  }
  for (let i = start; i <= 9; i++) {
    if (n - i >= 0) {
      comb.push(i);
      backtrack(ans, comb, k, i + 1, n - i);
      comb.pop();
    }
  }
}
