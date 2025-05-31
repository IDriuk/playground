// Partition Equal Subset Sum
// Given an integer array nums, return true if you can partition the array into two subsets 
// such that the sum of the elements in both subsets is equal or false otherwise.
// https://leetcode.com/problems/partition-equal-subset-sum/submissions/
// connect: undefined


var canPartition = function(nums: number[]) {
  let total = 0
  for (let num of nums) {
      total += num
  }
  
  if (total % 2 != 0) return false
  let subSum = total / 2
  let len = nums.length
  
  let tabs = Array(len + 1).fill(null).map(() => Array(subSum + 1))
  tabs[0][0] = true
  
  for (let i = 1; i < len + 1; i++) {
      let cur = nums[i - 1]
      for (let j = 0; j < subSum + 1; j++) {
          tabs[i][j] = !!tabs[i - 1][j] || !!tabs[i - 1][j - cur]
      }
  }
  
  return tabs[len][subSum]
};

test("partition equal subset sum", () => {
  expect(canPartition([1,5,11,5])).toBe(true)
  expect(canPartition([1,2,3,5])).toBe(false)
})