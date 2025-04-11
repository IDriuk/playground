/*
  334. Increasing Triplet Subsequence
  Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
  Formally the function should:
  Return true if there exists i, j, k such that arr[i] < arr[j] < arr[k] given 0 <= i < j < k <= n-1 else return false.
  Note:
  Your algorithm should run in O(n) time complexity and O(1) space complexity.
*/

export function increasingTriplet(nums: number[]) {
  let min = Infinity;
  let secMin = Infinity;
  for (let n of nums) {
    if (n <= min) {
      min = n;
    } else if (n <= secMin) {
      secMin = n;
    } else {
      return true;
    }
  }
  return false;
}
