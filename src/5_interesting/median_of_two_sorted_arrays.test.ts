// Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// connect: interesting, undefined

var findMedianSortedArrays = function(nums1: number[], nums2: number[]) {
  let merged = []
  
  while ( nums1.length && nums2.length ) {
      if (nums1[0] < nums2[0]) {
          merged.push(nums1.shift())
      } else {
          merged.push(nums2.shift())
      }
  }
  
  while ( nums1.length ) {
      merged.push(nums1.shift())
  }
  
  while ( nums2.length) {
      merged.push(nums2.shift())
  }
  
  let len = merged.length
  let median
  
  if ( len % 2 ) {
      median = merged[Math.floor(len / 2)]
  } else {
      let left = merged[Math.floor((len - 1) / 2)]!
      let right = merged[len / 2]!
      median = (left + right) / 2
  }
  
  return median
};

test("median of two sorted arrays", () => {
  expect(findMedianSortedArrays([1,3], [2])).toBe(2)
  expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5)
})