// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// connect: undefined

function getSum( a: number, b: number ) {
   var result = 0;
   var bigger = a > b ? a : b;
   var smaller = a > b ? b : a;
   for (var i = smaller; i <= bigger; i++) { result += i }
   return result
}

test('should return sum of all the integers between and including them', () => {
  expect(getSum(5, 5)).toBe(5)
  expect(getSum(1, 5)).toBe(15)
})