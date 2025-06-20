// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// https://leetcode.com/problems/trapping-rain-water/submissions/
// connect: dp


export function trap(height: number[]) {
  let left = 0;
  let right = height.length - 1
  let ans = 0
  let lMax = 0
  let rMax = 0
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= lMax ? (lMax = height[left]) : ans += (lMax - height[left])
      left++
    } else {
      height[right] >= rMax ? (rMax = height[right]) : ans += (rMax - height[right])
      right--
    }
  }
  return ans 
}


test(" trapping rain water", () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
  expect(trap([4,2,0,3,2,5])).toBe(9)
})
