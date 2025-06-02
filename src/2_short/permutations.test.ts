// Permutations
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// https://leetcode.com/problems/permutations/submissions/
// connect: recursion

var permute = function(nums: number[]) {
  let res: number[][] = []
  
  function perm(results: number[], nums: number[]) {
      if (nums.length == 1) {
          results.push(nums[0])
          res.push(results)
      }
      
      for ( let i = 0; i < nums.length; i++) {
          let leftNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
          let num = nums[i]
          let nextResults = [...results, num]
          perm(nextResults, leftNums)
      }
  }
  
  perm([], nums)

  return res
};

test("permutations", () => {
  expect(permute([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
  expect(permute([0,1])).toEqual([[0,1],[1,0]])
  expect(permute([1])).toEqual([[1]])
})