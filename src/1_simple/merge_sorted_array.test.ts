// Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// https://leetcode.com/problems/merge-sorted-array/submissions/
// connect: undefined

var merge1 = function(nums1: number[], m: number, nums2: number[], n: number) {
  let i = 0
  
  while ( i < m) {
      if (nums1[i] > nums2[0]) {
          let tmp = nums1[i]
          nums1[i] = nums2[0]
          nums2[0] = tmp
          let j = 0
          while ( nums2[j] > nums2[j + 1] ) {
              tmp = nums2[j]
              nums2[j] = nums2[j + 1]
              nums2[j + 1] = tmp
              j++
          }
      }
      i++
  }
  
  let j = 0
  while ( i < m + n ) {
      nums1[i] = nums2[j]
      i++
      j++
  }

  return nums1
};

test("merge sorted array", () => {
  expect(merge1([1,2,3,0,0,0], 3, [2,5,6], 3)).toEqual([1,2,2,3,5,6])
  expect(merge1([1], 1, [], 0)).toEqual([1])
  expect(merge1([], 0, [1], 1)).toEqual([1])
})