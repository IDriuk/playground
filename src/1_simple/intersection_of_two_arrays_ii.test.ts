// Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// connect: set, interesting

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1: number[], nums2: number[]) {
    
  let result = []
  let hash: Record<number, number> = {}
  
  for ( let i = 0; i < nums1.length; i++) {
      let el = nums1[i]
      if (hash[el]) {
          hash[el] += 1
      } else {
          hash[el] = 1
      }
  }
  
  for ( let i = 0; i < nums2.length; i++) {
      let el = nums2[i]
      if (hash[el]) {
          result.push(el)
          hash[el]--
      }
  }
  
  return result
};


test ("should return intersection", () => {
  expect(intersect([1,2,2,1], [2,2])).toEqual([2,2])
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([9,4])
})