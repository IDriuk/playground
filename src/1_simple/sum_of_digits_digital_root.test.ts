// Sum of Digits / Digital Root
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// connect: recursion

function digitalRoot(n: number) {
  if ( n <= 9 ) return n

  let sum = `${n}`.split('').map(Number).reduce( (a, b) => { return a + b })

  return digitalRoot(sum)
}

test("Add the digits in the string repeatedly until only one digit remains", () => {
  expect( digitalRoot(16)).toBe(7 )
  expect( digitalRoot(456)).toBe(6 )
})