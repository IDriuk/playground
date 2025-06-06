// Reverse Bits
// Reverse bits of a given 32 bits unsigned integer.
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
// https://leetcode.com/problems/reverse-bits/
// connect: bits, interesting

var reverseBits = function(n: number) {
  let str = n.toString(2)
  let zerosCount = 32 - str.length
  for ( let i = 0; i < zerosCount; i++) {
    str = '0' + str
  }
  return parseInt(str.split('').reverse().join(''), 2)
};

test("reverse bits", () => {
  expect(reverseBits(5)).toBe(2684354560)
})

