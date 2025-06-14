// Sort Colors
// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// https://leetcode.com/problems/sort-colors/submissions/
// connect: interesting

var sortColors = function(nums: number[]) {
  let end = nums.length - 1
  let i = 0
  let el
  
  while (i <= end) {
      el = nums[i]
      if (el == 1) { 
          i++ 
      } else if (el == 0) {
          nums.splice(i, 1)
          nums.unshift(el)
          i++
      } else {
          nums.splice(i, 1)
          nums.push(el)
          end--
      }
  }

  return nums
};

test("sort colors", () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2])
  expect(sortColors([2,0,1])).toEqual([0,1,2])
})