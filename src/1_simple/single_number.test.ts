// Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// https://leetcode.com/problems/single-number/
// input [2,2,1], output [1]
// connect: set

var singleNumber = function(nums: number[]) {
  var set: Record<number,number> = {}
  
  while ( nums.length ) {
      var num = nums.pop()!
      set[num] = set[num] ? set[num] + 1 : 1
  }
  
  var keys = Object.keys(set)
  
  for (var i = 0; i < keys.length; i++) {
      var num = +keys[i]
      var count = set[num]
      if ( count == 1) {
          return num
      }
  } 
};

test(" single number", () => {
  expect(singleNumber([2,2,1])).toBe(1)
  expect(singleNumber([4,1,2,1,2])).toBe(4)
  expect(singleNumber([1])).toBe(1)
})