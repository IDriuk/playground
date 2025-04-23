/*
  88. Merge Sorted Array
  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
  Note:
    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
*/

export function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) {
  for (let i = m - 1, j = n - 1, k = m + n - 1; k >= 0 && j >= 0; k--) {
    nums1[k] = i < 0 || nums1[i] < nums2[j] ? nums2[j--] : nums1[i--];
  }
  return nums1;
}
