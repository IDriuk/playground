/*
  325. Maximum Size Subarray Sum Equals k
  Given an array nums and a target value k,
  find the maximum length of a subarray that sums to k.
  If there isn't one, return 0 instead.
*/

export function maxSubArray(nums: number[], k: number) {
  let sumToIndex: Map<number, number> = new Map();
  let maxLen = 0;
  let sum = 0;
  sumToIndex.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sumToIndex.has(sum - k)) {
      maxLen = Math.max(maxLen, i - sumToIndex.get(sum - k)!);
    }
    if (!sumToIndex.has(sum)) {
      sumToIndex.set(sum, i);
    }
  }
  return maxLen;
}
