/*
  154. Find Minimum in Rotated Sorted Array II
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
  Find the minimum element.
  The array may contain duplicates.
*/

export function minRotatedArray2(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let mid = lo + ~~((hi - lo) / 2);

    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else if (nums[mid] < nums[hi]) {
      hi = mid;
    } else {
      hi--;
    }
  }

  return nums[lo];
}
