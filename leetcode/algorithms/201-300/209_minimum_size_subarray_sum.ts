/*
  209. Minimum Size Subarray Sum
  Given an array of n positive integers and a positive integer s,
  find the minimal length of a contiguous subarray of which the sum >= s.
  If there isn't one, return 0 instead
*/

export function minSubArrayLen(s: number, nums: number[]) {
  let n = nums.length;
  let ans = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }

  return ans != Infinity ? ans : 0;
}
