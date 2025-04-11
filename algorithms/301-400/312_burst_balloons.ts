/*
  312. Burst Balloons
  Given n balloons, indexed from 0 to n - 1.  Each balloon is painted with a number on it represented by array nums.
  You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. 
  Here left and right are adjacent indices of i. After the burst , the left and right then becomes adjacent.
  Find the maximum coins you can collect by bursting the balloons wisely.
*/

export function maxCoins(iNums: number[]) {
  let nums = new Array<number>(iNums.length + 2);
  let n = 1;
  for (let x of iNums) {
    if (x > 0) {
      nums[n++] = x;
    }
  }
  nums[0] = 1;
  nums[n++] = 1;
  let memo: number[][] = Array(n)
    .fill(null)
    .map((_) => Array(n).fill(0));

  let burst = (
    memo: number[][],
    nums: number[],
    left: number,
    right: number,
  ) => {
    if (left + 1 == right) {
      return 0;
    }
    if (memo[left][right] > 0) {
      return memo[left][right];
    }
    let ans = 0;
    for (let i = left + 1; i < right; i++) {
      ans = Math.max(
        ans,
        nums[left] * nums[i] * nums[right] +
          burst(memo, nums, left, i)! +
          burst(memo, nums, i, right)!,
      );
    }
    memo[left][right] = ans;
    return ans;
  };

  return burst(memo, nums, 0, n - 1);
}
