/* 
  81. Search in Rotated Sorted Array II

  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  You are given a target value to search.
  If found in the array return true, otherwise return false.

  Follow up:
    This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
    Whould this affect the run-time complexity? How and why?
*/

export function searchRotatedArray2(nums: number[], target: number) {
  if (nums == null || nums.length == 0) {
    return false;
  }
  let l = 0;
  let h = nums.length - 1;
  while (l <= h) {
    let m = l + Math.floor((h - l) / 2);
    if (nums[m] == target) {
      return true;
    }
    if (nums[l] == nums[m] && nums[m] == nums[h]) {
      l++;
      h--;
    } else if (nums[l] == nums[m]) {
      l = m + 1;
    } else if (nums[m] == nums[h]) {
      h = m - 1;
    } else if (nums[l] < nums[m]) {
      if (nums[l] <= target && target < nums[m]) {
        h = m - 1;
      } else {
        l = m + 1;
      }
    } else if (nums[l] > nums[m]) {
      if (nums[m] < target && target <= nums[h]) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
  }

  return false;
}
