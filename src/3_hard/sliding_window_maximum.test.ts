// Sliding Window Maximum
// You are given an array of integers nums, 
// there is a sliding window of size k which is moving from the very left of the array to the very right. 
// You can only see the k numbers in the window.   Each time the sliding window moves right by one position.
// Return the max sliding window.
// https://leetcode.com/problems/sliding-window-maximum/
// connect: slide, interesting

var maxSlidingWindow = function(nums: number[], k: number) {
  if (!k) { return null }
  if (k == 1) { return nums }
  if (k >= nums.length) { return [Math.max(...nums)] }
  
  let q = nums.slice(0, k)
  let max = Math.max(...q)
  let res = [max]
  let pos = q.lastIndexOf(max)
  
  for (let i = k; i < nums.length; i++) {
      q.shift()
      q.push(nums[i])
      pos--
      if (pos < 0) {
          max = Math.max(...q)
          pos = q.lastIndexOf(max)
      } else if (nums[i] >= max) {
          max = nums[i]
          pos = k - 1
      }
      
      res.push(max)
  }
  
  return res
};

test(" sliding window maximum ", () => {
  expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toEqual([3,3,5,5,6,7])
  expect(maxSlidingWindow([1], 1)).toEqual([1])
})