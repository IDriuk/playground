/*
  136. Single Number
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.

  Note: 
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

export function singleNumber(nums: number[]): number {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}
