// Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// connect: recurstion, interesting

var search = function(nums:number[], target:number) {
  let result = -1
  
  if (nums.length) {
      rotateSearch(0, nums.length - 1)
  }
  
  return result
  
  function rotateSearch(left: number, right: number) {
      
      let mid = Math.floor((left + right) / 2)
      let lv = nums[left]
      let mv = nums[mid]
      let rv = nums[right]
      
      if (mv == target) {
          result = mid
      } else if (lv == target) {
          result = left
      } else if (rv == target) {
          result = right
      } else if (mid <= left || mid >= right) {
          return
      } else if (target > mv && target < rv) {
          rotateSearch(mid + 1, right - 1)
      } else if (target > lv && target < mv) {
          rotateSearch(left + 1, mid - 1)
      } else if (mv > lv && mv > rv) {
          rotateSearch(mid + 1, right - 1)
      } else if (mv < lv && mv < rv)  {
          rotateSearch(left + 1, mid - 1)
      }
  }
};

test(" search in rotated sorted array", () => {
  expect(search([4,5,6,7,0,1,2], 0)).toBe(4)
  expect(search([4,5,6,7,0,1,2], 3)).toBe(-1)
  expect(search([1], 0)).toBe(-1)
})