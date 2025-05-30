// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// https://leetcode.com/problems/move-zeroes/submissions/
// connect: undefined

var moveZeroes = function(nums: number[]) {
  let zeroCount = 0
  let i = 0
  while ( i < nums.length - zeroCount){
      if (nums[i] == 0) {
          nums.splice(i, 1)
          nums.push(0)
          zeroCount++
      } else {
          i++
      }
  }

  return nums
};

test("move zeroes", () => {
  expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0])
  expect(moveZeroes([0])).toEqual([0])
})