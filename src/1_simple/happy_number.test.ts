// Happy Number
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// https://leetcode.com/problems/happy-number/submissions/
// connect: recursion, interesting

var isHappy = function(n: number) {
  let set: Record<number, boolean> = {}

  function checkHappy(num: number): boolean {
      num = `${num}`.split('').map(Number).reduce( (a, v) => a + v * v, 0)
      
      if (set[num]) {
         return false
      } else {
         set[num] = true
      }
      
      return num == 1 ? true : checkHappy(num)
  }
  
  return checkHappy(n)
};

test("should determine happy number", () => {
  expect(isHappy(19)).toBe(true)
  expect(isHappy(2)).toBe(false)
})