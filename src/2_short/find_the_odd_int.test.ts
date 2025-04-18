// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// connect: bits

// function findOdd(A: number[]) {
//   const counts:Record<string,number> = {}
//   for ( let d of A) {
//     counts[d] = counts[d] ? counts[d] + 1 : 1
//   }
//   return +Object.keys(counts).filter( i => counts[i] % 2)[0]
// }

const findOdd = (xs: number[]) => xs.reduce((a, b) => a ^ b);

test("find the odd int", () => {
  expect(findOdd([7])).toBe(7)
  expect(findOdd([0])).toBe(0)
  expect(findOdd([1,1,2])).toBe(2)
  expect(findOdd([0,1,0,1,0])).toBe(0)
  expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4)
})