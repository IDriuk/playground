// Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// https://leetcode.com/problems/running-sum-of-1d-array/
// connect: reduce, interesting

var runningSum = function(nums: number[]) {
  return nums.reduce((a: number[], v: number, i: number) => {
      return [...a, nums.slice(0, i + 1).reduce( (a, v) => a + v, 0)]
  }, [])
};


test(" running sum of 1d array", () => {
  expect(runningSum([1,2,3,4])).toEqual([1,3,6,10])
  expect(runningSum([1,1,1,1,1])).toEqual([1,2,3,4,5])
  expect(runningSum([3,1,2,10,1])).toEqual([3,4,6,16,17])
})