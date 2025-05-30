// Number of steps to reduce a number to zero
// You are given a non-negative integer num. 
// Your task is to determine the number of steps required to reduce num to zero using the following rules:
// If the current number is even, divide it by 2.
// If the current number is odd, subtract 1 from it.
// Each operation counts as one step. Implement a function numberOfSteps(num) 
// that returns the total number of steps required to reduce the given number to zero.
// connect: undefined

var numberOfSteps  = function(num: number) {
  let steps = 0
  
  while (num) {
    num = num % 2 == 0 ? num / 2 : num - 1
    steps++
  }
  
  return steps
};


test("number of steps to reduce a number to zero", () => {
  expect(numberOfSteps(10)).toBe(5)
})
