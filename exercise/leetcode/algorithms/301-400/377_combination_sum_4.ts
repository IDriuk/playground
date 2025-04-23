/*
  377. Combination Sum IV
  Given an integer array with all positive numbers and no duplicates,
  find the number of possible combinations that add up to a positive integer target.
*/

export function combinationSum4(nums: number[], target: number) {
  let dp = new Array(target + 1).fill(-1);

  let helper = (nums: number[], target: number, dp: number[]): number => {
    if (target == 0) {
      return 1;
    }

    if (dp[target] != -1) {
      return dp[target];
    }

    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      if (target >= nums[i]) {
        res += helper(nums, target - nums[i], dp);
      }
    }
    dp[target] = res;
    return res;
  };

  return helper(nums, target, dp);
}
