// Sqrt(x)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// https://leetcode.com/problems/sqrtx/submissions/
// connect: interesting

var mySqrt = function(x: number) {
  let r = 0
  while ( r * r <= x ) {
      r++
  }
  
  return r - 1
};

test(" sqrt(x) ", () => {
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(8)).toBe(2)
})