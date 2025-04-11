/*
  283. Move Zeroes
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
  Note:
  You must do this in-place without making a copy of the array.
  Minimize the total number of operations.
*/

export function moveZeroes(nums: number[]) {
  if (nums == null || nums.length == 0) {
    return;
  }

  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[end];
      nums[end++] = nums[i];
      nums[i] = temp;
    }
  }

  return nums;
}
