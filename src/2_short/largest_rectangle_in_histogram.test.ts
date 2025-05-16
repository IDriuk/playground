// Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, 
// return the area of the largest rectangle in the histogram.
// https://leetcode.com/problems/largest-rectangle-in-histogram/
// connect: minmax

var largestRectangleArea = function(heights: number[]) {
  if (!heights.length) { return 0 }
  
  let sorted = [...new Set(heights)].sort((a, b) => b - a)
  let max = 0
  
  for (let i = 0; i < sorted.length; i++) {
      let h = sorted[i]
      let w = 0
      let area = 0
      for (let j = 0; j < heights.length; j++) {
          if (heights[j] >= h) {
              w++
              area = h * w
              max = area > max ? area : max
          } else {
              w = 0
          }
      }
  }
  
  return max
};


test("should return the largest rectangle in the histogram", () => {
  expect(largestRectangleArea([2,1,5,6,2,3])).toBe(10)
  expect(largestRectangleArea([2,4])).toBe(4)
})