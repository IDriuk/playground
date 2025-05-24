// Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// https://leetcode.com/problems/maximum-subarray/submissions/
// connect: undefinded


var maxSubArray = function(nums: number[]) {
  var maxSum = -Infinity
  var prevSum = 0
  
  for (var i = 0; i < nums.length; i++) {
      
      if ( nums[i] <= 0 && nums[i] > maxSum) { 
          maxSum = nums[i]
      }
      
      if ( prevSum <= 0 && nums[i] > 0 ) {
          prevSum = nums[i]
      } else {
          prevSum += nums[i] 
      }
      
      if (prevSum > maxSum) { maxSum = prevSum }
  }
  
  return maxSum
};

test("maximum subarray", () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
  expect(maxSubArray([1])).toBe(1)
  expect(maxSubArray([5,4,-1,7,8])).toBe(23)
})