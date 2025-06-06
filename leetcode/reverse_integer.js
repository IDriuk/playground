// Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// https://leetcode.com/problems/reverse-integer/
// connect: undefined

var reverse = function(x) {
  let sign = x < 0 ? '-' : ''
  x = sign == '-' ? x : -x
  x = x.toString().split('').reverse().join('')
  x = +(sign + parseInt(x))
  if ( x > 2147483647 || x <  -2147483648) return 0
  return x
};

test("reverse integer", () => {
  expect(reverse(123)).toBe(321)
  expect(reverse(-123)).toBe(-321)
})