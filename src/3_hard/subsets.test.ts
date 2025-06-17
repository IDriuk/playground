// Subsets
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// https://leetcode.com/problems/subsets/
// connect: combinations, interesting

var subsets = function(nums: number[]) {
  let res = []
  let len = nums.length
  
  for (let i = Math.pow(2, len); i < Math.pow(2, len + 1); i++) {
      let mask = i.toString(2).substring(1)
      
      let sub = []
      for (let j = 0; j < len; j++){
          if (mask.charAt(j) == '1') {
              sub.push(nums[j])
          }
      }
      res.push(sub)
  }
  
  return res
};

test(" subsets ", () => {
  expect(subsets([1,2,3])).toEqual([[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]])
  expect(subsets([0])).toEqual([[],[0]])
})