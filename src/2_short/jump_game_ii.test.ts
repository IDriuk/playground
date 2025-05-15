// Jump Game II
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
// https://leetcode.com/problems/jump-game-ii/
// connect: dp

function jump(A: number[]) {
  let step = 0;
  let last = 0; 
  let cur = 0; 

  for (let i = 0; i < A.length; i++) {
    if (i > last) { 
      last = cur;
      step++;
      if (last >= A.length) return step;
    }
    cur = Math.max(cur, i + A[i]);
  }
  return step;
}

test("Minimum number of steps to reach the end of the array.", () => {
  expect(jump([2,3,1,1,4])).toBe(2)
  expect(jump([2,3,0,1,4])).toBe(2)
})