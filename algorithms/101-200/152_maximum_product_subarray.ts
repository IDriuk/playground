/*
  152. Maximum Product Subarray
  Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
*/

export function maxProduct(nums: number[]): number {
  if (nums == null || nums.length == 0) {
    return 0;
  }

  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let preMax = max;
    let preMin = min;
    max = Math.max(Math.max(nums[i], preMax * nums[i]), preMin * nums[i]);
    min = Math.min(Math.min(nums[i], preMax * nums[i]), preMin * nums[i]);
    res = Math.max(max, res);
  }
  return res;
}
