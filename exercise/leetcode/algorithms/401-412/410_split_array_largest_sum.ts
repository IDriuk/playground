/*
  410. Split Array Largest Sum
  Given an array which consists of non-negative integers and an integer m,
  you can split the array into m non-empty continuous subarrays.
  Write an algorithm to minimize the largest sum among these m subarrays.

  Note:
  If n is the length of array, assume the following constraints are satisfied:
  1 <= n <= 1000
  1 <= m <= min(50, n)
*/

export function splitArrayLongestSum(nums: number[], m: number) {
  let sum = 0;
  let max = 0;
  for (let n of nums) {
    sum += n;
    max = Math.max(n, max);
  }

  let lo = max;
  let hi = sum;
  while (lo < hi) {
    let mid = ~~(lo + (hi - lo) / 2);
    if (validate(nums, m, mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

function validate(nums: number[], m: number, maxSum: number): boolean {
  let subarraySum = 0;
  let numSubarray = 1;
  for (let n of nums) {
    subarraySum += n;
    if (subarraySum > maxSum) {
      subarraySum = n;
      numSubarray++;
      if (numSubarray > m) {
        return false;
      }
    }
  }
  return true;
}
