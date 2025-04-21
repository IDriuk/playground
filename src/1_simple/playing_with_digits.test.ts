// Playing with digits
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// connect: undefined

function digPow(n: number, p: number){
  let pows =  `${n}`
    .split('')
    .map(Number)
    .map( (v, i) => Math.pow(v, i + p))
    .reduce((ac, v) => ac + v, 0)
  
  return pows % n == 0 ? pows / n : -1
}

test("should fit tendency", () => {
  expect(digPow(89, 1)).toBe(1);
  expect(digPow(92, 1)).toBe(-1);
  expect(digPow(46288, 3)).toBe(51);
})