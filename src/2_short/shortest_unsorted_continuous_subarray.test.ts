// Shortest Unsorted Continuous Subarray
// Given an integer array nums, you need to find one continuous subarray such that 
// if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.
// Return the shortest such subarray and output its length.
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// connect: subarray, interesting

var findUnsortedSubarray = function(nums: number[]) {
  const sorted = [...nums].sort((a, b) => (a - b) )
  
  let minIndex = 0
  let maxIndex = -1
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] != sorted[i]) {
          minIndex = i
          break
      }
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] != sorted[i]) {
          maxIndex = i
          break
      }
  }
  
  return maxIndex - minIndex + 1
};

test("shortest unsorted continuous subarray", () => {
  expect(findUnsortedSubarray([2,6,4,8,10,9,15])).toBe(5)
  expect(findUnsortedSubarray([1,2,3,4])).toBe(0)
  expect(findUnsortedSubarray([1])).toBe(0)
})
