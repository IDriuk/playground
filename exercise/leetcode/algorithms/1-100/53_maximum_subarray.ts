/* 
  53. Maximum Subarray

  Given an integer array nums, 
  find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

export function maximumSubarray(ar: number[]): number {
  let max = ar[0];
  let maxEnding = ar[0];

  for (let i = 0; i < ar.length; i++) {
    maxEnding = Math.max(maxEnding + ar[i], ar[i]);
    max = Math.max(maxEnding, max);
  }

  return max;
}
