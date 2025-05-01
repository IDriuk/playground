/* 
  1. Two Sum
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution , and you may not use the same element twice.
*/
export function twoSum(nums: number[], target: number) {
  let pairs = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const pair = pairs.get(target - nums[i]);
    if (typeof pair == "number") {
      return [pair, i];
    } else {
      pairs.set(nums[i], i);
    }
  }
}
