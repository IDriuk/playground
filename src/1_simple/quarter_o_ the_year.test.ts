// Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/javascript
// connect: undefined

const quarterOf = (m: number) => Math.ceil(m/3);

test("should return quarter of the year", () => {
  expect(quarterOf(3)).toBe(1)
  expect(quarterOf(8)).toBe(3)
  expect(quarterOf(11)).toBe(4)
})