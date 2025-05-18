// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// https://leetcode.com/problems/longest-consecutive-sequence/submissions/
// connect: undefined

var longestConsecutive = function(nums: number[]) {
  let ar = []
  
  let min = 0
  for ( let num of nums) {
      if (num < min) {
          min = num
      }
  }
  
  for ( let num of nums) {
      ar[num - min] = true
  }
  
  let longest = 0
  let current = 0
  
  for (let i = 0; i < ar.length; i++) {
      if (!ar[i]) {
          current = 0
      } else {
          current++
          if (current > longest) {
              longest = current
          }
      }
  }
  
  return longest
};

test("longest consecutive sequence", () => {
  expect(longestConsecutive([100,4,200,1,3,2])).toBe(4)
  expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9)
  expect(longestConsecutive([1,0,1,2])).toBe(3)
})