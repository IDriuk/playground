/*
  162. Find Peak Element
  A peak element is an element that is greater than its neighbors.
  Given an input array nums, where nums[i] != nums[i + 1] , find a peak element and return its index.
  The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
  You may imagine that nums[-1] == nums[n] = -Infinity
*/

export function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}
