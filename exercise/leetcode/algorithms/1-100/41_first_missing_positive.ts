/* 
  41. First Missing Positive
  
  Given an unsorted integer array find the smallest missing positive integer.

  Note:
  Your algorithm should run in O(n) time and uses constant extra space.
*/

export function firstMissingPositive(nums: number[]): number {
  if (!nums || nums.length == 0) {
    return 1;
  }

  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let num = nums[i];

    while (nums[i] <= len && nums[i] > 0 && nums[num - 1] != num) {
      nums[i] = nums[num - 1];
      nums[num - 1] = num;
      num = nums[i];
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return len + 1;
}
