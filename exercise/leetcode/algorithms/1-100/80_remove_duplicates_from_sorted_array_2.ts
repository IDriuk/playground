/*
  80. Remove duplicates from sorted array II.

  Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

export function removeDuplicatesFromSortedArray2(nums: number[]): number {
  if (nums == null) return 0;
  let n = nums.length;
  if (n <= 2) {
    return 2;
  }

  let length = 2;
  for (let i = 2; i < n; i++) {
    if (nums[i] != nums[length - 2]) {
      nums[length] = nums[i];
      length++;
    }
  }

  return length;
}
