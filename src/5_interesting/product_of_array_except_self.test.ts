// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// https://leetcode.com/problems/product-of-array-except-self/
// connect: interesting



test("product of array except self", () => {
  const normalize = (arr: number[]) => arr.map(x => Object.is(x, -0) || Object.is(x, +0) ? 0 : x);
  // expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
  // expect(normalize(productExceptSelf([-1,1,0,-3,3]))).toEqual([ 0, 0, 9, 0, 0 ])
})
