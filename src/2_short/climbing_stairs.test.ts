// Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// https://leetcode.com/problems/climbing-stairs/
// connect: dp

var climbStairs = function(n: number) {
  if ( n == 1 ) {
      return 1
  }
  
  let results = []
  results[1] = 1
  results[2] = 2
  
  for ( let i = 3; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2]
  }
  
  return results[n]
};

test("distinct ways to climb stairs", () => {
  expect(climbStairs(5)).toBe(8)
})