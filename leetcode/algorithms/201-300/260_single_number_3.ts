/*
  260. Single Number III
  Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
  Find the two elements that appear only once.
*/

export function singleNumber3(nums: number[]) {
  if (nums.length < 3) {
    return nums;
  }
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  xor &= -xor;

  let val1 = 0;
  let val2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & xor) != 0) {
      val1 ^= nums[i];
    } else {
      val2 ^= nums[i];
    }
  }

  return [val1, val2];
}
