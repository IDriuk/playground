// Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
// https://leetcode.com/problems/subarray-sum-equals-k/submissions/
// connect: interesting, slide

var subarraySum = function(nums: number[], k: number) {
  let count = 0
  let sum = 0
  let map: Record<number, number> = {0: 1}
  
  for (let num of nums) {
      sum += num
      if (map[sum - k]) {
          count += map[sum - k]
      }
      map[sum] = map[sum] ? map[sum] + 1 : 1
  }
  
  return count
};

test("subarray sum equals k", () => {
  expect(subarraySum([1,1,1], 2)).toBe(2)
  expect(subarraySum([1,2,3], 3)).toBe(2)
})