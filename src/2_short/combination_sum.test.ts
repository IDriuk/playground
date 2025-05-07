// Combination Sum
// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen numbers sum to target. 
// You may return the combinations in any order. 
// The same number may be chosen from candidates an unlimited number of times. 
// Two combinations are unique if the frequency of at least one of the chosen numbers is different. 
// The test cases are generated such that 
// the number of unique combinations that sum up to target is less than 150 combinations for the given input.
// https://leetcode.com/problems/combination-sum/submissions/
// connect: combinations

var combinationSum = function(candidates: number[], target: number) {
  const res: number[][] = []
  const num = candidates.sort( (a,b) => a - b)
  
  function dfs(num: number[], start: number, result: number[], sum: number, target: number) {
      if (sum == target) {
          res.push([...result])
          return
      }
      
      for (let i = start; i < num.length; i++) {
          if (num[i] + sum > target) break
          
          result.push(num[i])
          dfs(num, i, result, sum + num[i], target)
          result.pop()
      }
  }

  dfs(num, 0, [], 0, target)
  
  return res
  
};

it("should return combinations that sum to the target", () => {
  expect(combinationSum([2,3,6,7], 7)).toEqual([[2,2,3],[7]])
  expect(combinationSum([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]])
  expect(combinationSum([2], 1)).toEqual([])
})