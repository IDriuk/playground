// Target Sum
// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums 
// and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 
// and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.
// https://leetcode.com/problems/target-sum/submissions/
// connect: interesting

var findTargetSumWays = function(nums: number[], S: number) {
  let count = 0
  
  calc(nums, S)
  
  return count
  
  function calc(ar: number[], s: number) {
      if ( ar.length == 0) {
          if (s == 0) {
              count++
          }
          return
      }

      let val = ar.shift()!
      calc(ar, s - val)
      calc(ar, s + val)
      ar.unshift(val)
  }
};

test("target sum", () => {
  expect(findTargetSumWays([1,1,1,1,1], 3)).toBe(5)
  expect(findTargetSumWays([1], 1)).toBe(1)
})