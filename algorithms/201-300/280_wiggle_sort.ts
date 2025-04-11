/*
  280. Wiggle Sort
  Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]...
*/

export function wiggleSort(nums: number[]) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i += 2) {
    swap(nums, i, i + 1);
  }
  return nums;
}

function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
