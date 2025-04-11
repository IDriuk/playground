/*
  327. Count of Range Sum (quest)
  Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
  Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i <= j), inclusive.
  Note:
  A naive algorithm of O(n2) is trivial.
  You must do better than that.
*/

export function countRangeSum(nums: number[], lower: number, upper: number) {
  let n = nums.length;
  let sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  return countWhileMergeSort(sums, 0, n + 1, lower, upper);
}

function countWhileMergeSort(
  sums: number[],
  start: number,
  end: number,
  lower: number,
  upper: number,
): number {
  if (end - start <= 1) {
    return 0;
  }
  let mid = ~~((start + end) / 2);
  let count =
    countWhileMergeSort(sums, start, mid, lower, upper) +
    countWhileMergeSort(sums, mid, end, lower, upper);
  let j = mid;
  let k = mid;
  let t = mid;
  let cache = Array(end - start).fill(0);
  for (let i = start, r = 0; i < mid; i++, r++) {
    while (k < end && sums[k] - sums[i] < lower) {
      k++;
    }
    while (j < end && sums[j] - sums[i] <= upper) {
      j++;
    }
    while (t < end && sums[t] < sums[i]) {
      cache[r] = sums[t];
      r++;
      t++;
    }
    cache[r] = sums[i];
    count += j - k;
  }
  for (let i = 0; i < t - start; i++) {
    sums[start + i] = cache[i];
  }
  return count;
}
