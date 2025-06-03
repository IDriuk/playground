// Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// https://leetcode.com/problems/power-of-three/
// connect: undefined

var isPowerOfThree = function(n: number) {
  let cub = 1
  
  while ( cub <= n) {
      if (cub == n) { 
          return true 
      } else {
          cub *= 3
      }
  }
  
  return false
};

test("power of three", () => {
  expect(isPowerOfThree(27)).toBe(true)
  expect(isPowerOfThree(0)).toBe(false)
  expect(isPowerOfThree(-1)).toBe(false)
})