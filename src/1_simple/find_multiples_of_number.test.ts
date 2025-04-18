// Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// connect: undefined


function findMultiples(integer: number, limit: number) {
  const result = []
  let mult = 1
  while (true) {
    let val = mult * integer
    if (val > limit) { break }
    result.push(val)
    mult++
  }
  return result
}

test('should return multiples', () => {
  expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
})
