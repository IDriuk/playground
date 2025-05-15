// Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
  let result = []
  let hash = {}
  
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
