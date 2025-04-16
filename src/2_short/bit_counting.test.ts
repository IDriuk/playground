// Bit Counting
// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// connect: bits

var countBits = function(n:number) {
  let sum = 0

  while (n) {
    n &= (n - 1)
    sum++
  }

  return sum
};

/* 
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
}; 
*/

test('should count bits', () => {
  expect(countBits(5)).toBe(2)
  expect(countBits(1234)).toBe(5)
})