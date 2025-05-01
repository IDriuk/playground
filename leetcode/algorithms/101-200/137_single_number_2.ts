/*
  137. Single Number II
  Given a non-empty array of integers, every element appears three times except for one. Find that single one.

  Note: 
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

export function singleNumber2(nums: number[]): number {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = ones ^ (nums[i] & ~twos);
    twos = twos ^ (nums[i] & ~ones);
  }
  return ones;
}
