// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// connect: undefined

function solution(number:number){
  let i = 0
  let sum = 0
  while (i < number) {
    if ( !(i % 3) || !(i % 5) ) {
      sum += i
    }
    i++
  }
  
  return sum
}

test("should return sum of multiples", () => {
  expect(solution(10)).toBe(23)
})