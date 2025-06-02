// Perfect Squares
// Given an integer n, return the least number of perfect square numbers that sum to n. 
// A perfect square is an integer that is the square of an integer; in other words, 
// it is the product of some integer with itself. 
// For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
// https://leetcode.com/problems/perfect-squares/submissions/
// connect: minmax, interesting

var numSquares = function(n: number) {
  let min = Infinity

  count(n)

  return min

  function count(n: number, c = 0) {
    if (n == 0 && c < min) {
      min = c
      return
    } else if (n < 0 || c >= min) {
      return
    } else {
      let s = Math.floor(Math.sqrt(n))

      for ( let i = s; i >= 1; i--) {
        count(n - i * i, c + 1)
      }
    }
  }
};

test("perfect squares", () => {
  expect(numSquares(12)).toBe(3)
  expect(numSquares(13)).toBe(2)
})