// House robber
// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them 
// is that adjacent houses have security systems connected and it will automatically contact the police 
// if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.
// https://leetcode.com/problems/house-robber/submissions/
// connect: dp


let rob1 = function rob(nums: number[]) {
  if (!nums || nums.length < 1) return 0
  if ( nums.length < 3) return Math.max(...nums)
  
  var maxSums = [nums[0], nums[1], nums[0] + nums[2]]
  
  for ( var i = 3; i < nums.length; i++) {
      maxSums[i] = Math.max(maxSums[i - 2], maxSums[i - 3]) + nums[i] 
  }
  
  return Math.max(...maxSums)
};


test("should return the maximum amount of money", () => {
  expect(rob1([1,2,3,1])).toBe(4)
  expect(rob1([2,7,9,3,1])).toBe(12)
})