// Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// https://leetcode.com/problems/longest-increasing-subsequence/
// connect: interesting

var lengthOfLIS = function(nums: number[]) {
  if (!nums || nums.length == 0) {
      return 0
  }
  
  let levs = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
      let num  = nums[i]
      let last = levs[levs.length - 1]
      
      if (num > last) {
          levs.push(num)
      }
      for (let j = 0; j < levs.length; j++) {
          if (levs[j] > num) {
              levs[j] = num
          }
          if (levs[j] == num) {
              break
          }
      }
  }
  
  return levs.length
};

test("longest increasing subsequence", () => {
  expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4)
  expect(lengthOfLIS([0,1,0,3,2,3])).toBe(4)
  expect(lengthOfLIS([7,7,7,7,7,7,7])).toBe(1)
})