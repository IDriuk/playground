// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. 
// You may return the answer in any order.
// https://leetcode.com/problems/top-k-frequent-elements/
// connect: interesting

var topKFrequent = function(nums: number[], k: number) {
    
  let set = nums.reduce( (ac: Record<number, number>, v) => {
      ac[v] = ac[v] ? ac[v] + 1 : 1
      return ac
  }, {})
  
  return Object.entries(set).sort( (a, b) => b[1] - a[1]).slice(0,k).map( v => v[0]).map(Number)
};

test("top k frequent elements", () => {
  expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2])
  expect(topKFrequent([1], 1)).toEqual([1])
})