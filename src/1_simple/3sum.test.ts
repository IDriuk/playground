// 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// https://leetcode.com/problems/3sum/
// connect: interesting, combinations

var threeSum = function(nums: number[]) {
  if (nums == null || nums.length < 3) { return [] }
  
  nums.sort( (a, b) => a - b)
  
  let res: number[][] = []
 
  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {
          break
      }
      
      if ( i > 0 && nums[i] == nums[i - 1]) {
          continue
      }
      
      let j = i + 1
      let k = nums.length - 1
      
      while (j < k) {
          if (nums[i] + nums[j] > 0) {
              break
          }
          
          if (j > i + 1 && nums[j] == nums[j - 1]) {
              j++
              continue
          }
          
          if (nums[i] + nums[j] + nums[k] < 0) {
              j++
          } else if (nums[i] + nums[j] + nums[k] > 0) {
              k--
          } else {
              res.push([nums[i], nums[j], nums[k]])
              j++
              k--
          }
      }
  }
  
  return res
};

test('3Sum', () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
  expect(threeSum([0,1,1])).toEqual([])
  expect(threeSum([0,0,0])).toEqual([[0,0,0]])
})