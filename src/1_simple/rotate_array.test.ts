// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// https://leetcode.com/problems/rotate-array/
// connect: undefined

var rotate = function(nums: number[], k: number) {
  while ( k >= nums.length) {
      k -= nums.length
  }
  
  let ar = [...nums]
  ar = ar.reverse()
  ar = [...ar.slice(0,k).reverse(), ...ar.slice(k).reverse()]

  for ( let i = 0; i < nums.length; i++ ) {
      nums[i] = ar[i]
  }

  return nums
};

test("rotate array", () => {
  expect(rotate([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4])
  expect(rotate([-1,-100,3,99], 2)).toEqual([3,99,-1,-100])
})