// Integers: Recreation One
// Find all integers between m and n (m and n are integers with 1 <= m <= n)
// such that the sum of their squared divisors is itself a square.
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
// connect: undefined

function listSquared(m: number, n: number) {
  let res = []
  for (let i = m; i <= n; i++) {
    let count = 0
    for (let j = 1; j <= i; j++) {
      if ( !(i % j) ) {
        count += j * j
      }
    }
    if (Number.isInteger(Math.sqrt(count))) {
      res.push([i, count])
    }
  }
  return res
}

test("should return squared", () => {
  expect(listSquared(1, 250)).toEqual([[1, 1], [42, 2500], [246, 84100]])
  expect(listSquared(42, 250)).toEqual([[42, 2500], [246, 84100]])
  expect(listSquared(250, 500)).toEqual([[287, 84100]])
})