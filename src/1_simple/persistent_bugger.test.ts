// Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// connect: reduce

function persistence(num: number) {
  let count = 0
  while (num > 9) {
    num = ('' + num).split('').map(Number).reduce( (a, b) => a * b)
    count++
  }
  return count
}

test("should return multiplicative persistence", () => {
  expect(persistence(39)).toBe(3);
  expect(persistence(4)).toBe(0);
  expect(persistence(25)).toBe(2);
  expect(persistence(999)).toBe(4);
})