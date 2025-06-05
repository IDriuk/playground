// Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
// connect: interesting

var removeDuplicates = function(nums: number[]) {
  let i = 0
  while (true) {
      if (nums[i] == nums[i + 1]) {
          nums.splice(i + 1, 1)
      } else {
          i++
      }
      if (nums[i] == undefined) {
          return nums.length
      }
  }
};

test("remove duplicates from sorted array", () => {
  expect(removeDuplicates([1,1,2])).toBe(2)
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
})
