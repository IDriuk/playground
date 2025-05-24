// Maximum Product Subarray
// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// https://leetcode.com/problems/maximum-product-subarray/
// connect: interesting, minmax


var maxProduct = function(nums: number[]) {
  if (nums == null || nums.length == 0) {
      return 0
  }
  
  let res = nums[0]
  let min = nums[0]
  let max = nums[0]
  
  for ( let i = 1; i < nums.length; i++) {
      let prevMin = min
      let prevMax = max
      let num = nums[i]
      
      min = Math.min(num, prevMin * num, prevMax * num )
      max = Math.max(num, prevMin * num, prevMax * num )
      
      res = Math.max(res, max)
  }
  
  return res
};

test("maximum product subarray", () => {
  expect(maxProduct([2,3,-2,4])).toBe(6)
  expect(maxProduct([-2,0,-1])).toBe(0)
})