/*
  153. Find Minimum in Rotated Sorted Array
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
  Find the minimum element.
  You may assume no duplicate exists in the array.
*/

export function minRotatedArray(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;

  if (nums[right] > nums[0]) {
    return nums[0];
  }

  while (right >= left) {
    let mid = left + ~~((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
