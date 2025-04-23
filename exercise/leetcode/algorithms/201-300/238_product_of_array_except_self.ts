/*
  238. Product of Array Except Self
  Given an array nums of n integers where n > 1, 
  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

  Note:
  Please solve it without division and in O(n).

  Follow up:
  Could you solve it with constant space complexity? 
  (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

export function productExceptSelf(nums: number[]) {
  let n = nums.length;
  let output = Array(n).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] *= left;
    left *= nums[i];
    output[n - 1 - i] *= right;
    right *= nums[n - 1 - i];
  }

  return output;
}
