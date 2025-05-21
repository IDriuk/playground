// Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.
// https://leetcode.com/problems/majority-element/submissions/
// connect: undefined, interesting


var majorityElement = function(nums: number[]) {
  var min = nums.length / 2
  var set: Record<number, number> = {}
  var index = nums.length - 1
  var val
  
  while (index >= 0) {
      val = nums[index--]
      if (set[val] ) {
          set[val]++
      } else {
          set[val] = 1
      }
      if (set[val] >= min) return val
  }
};

test("majority element", () => {
  expect(majorityElement([3,2,3])).toBe(3)
  expect(majorityElement([2,2,1,1,1,2,2])).toBe(2)
})