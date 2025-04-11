/*
  321. Create Maximum Number
  Given two arrays of length m and n with digits 0 - 9 representing two numbers.
  Create the maximum number of length k <= m + n from digits of the two.
  The relative order of the digits from the same array must be preserved.
  Return an array of the k digits.
  Note: You should try to optimize your time and space complexity.
*/

export function maxNumber(nums1: number[], nums2: number[], k: number) {
  let n = nums1.length;
  let m = nums2.length;
  let ans = Array(k).fill(0);
  for (let i = Math.max(0, k - m); i <= k && i <= n; ++i) {
    let candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
    if (greater(candidate, 0, ans, 0)) {
      ans = candidate;
    }
  }
  return ans;
}

function merge(nums1: number[], nums2: number[], k: number) {
  let ans = Array(k).fill(0);
  for (let i = 0, j = 0, r = 0; r < k; ++r) {
    ans[r] = greater(nums1, i, nums2, j) ? nums1[i++] : nums2[j++];
  }
  return ans;
}

function greater(nums1: number[], i: number, nums2: number[], j: number) {
  while (i < nums1.length && j < nums2.length && nums1[i] == nums2[j]) {
    i++;
    j++;
  }
  return j == nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
}

function maxArray(nums: number[], k: number) {
  let n = nums.length;
  let ans = Array(k).fill(0);
  for (let i = 0, j = 0; i < n; ++i) {
    while (n - i + j > k && j > 0 && ans[j - 1] < nums[i]) {
      j--;
    }
    if (j < k) {
      ans[j++] = nums[i];
    }
  }
  return ans;
}
