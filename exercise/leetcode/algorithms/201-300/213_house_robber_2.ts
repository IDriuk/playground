/*
  213. House Robber II
  You are a professional robber planning to rob houses along a street.
  Each house has a certain amount of money stashed.
  All houses at this place are arranged in a circle.
  That means the first house is the neighbor of the last one.
  Meanwhile, adjacent houses have security system connected and it will automatically contact the police 
  if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers representing the amount of money of each house,
  determine the maximum amount of money you can rob tonight without alerting the police.
*/

export function rob2(nums: number[]) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(
    robRange(nums, 0, nums.length - 2),
    robRange(nums, 1, nums.length - 1),
  );
}

function robRange(nums: number[], start: number, end: number) {
  let include = 0,
    exclude = 0;
  for (let j = start; j <= end; j++) {
    let i = include,
      e = exclude;
    include = e + nums[j];
    exclude = Math.max(e, i);
  }
  return Math.max(include, exclude);
}
