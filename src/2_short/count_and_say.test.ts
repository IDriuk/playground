// Count and Say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the run-length encoding of countAndSay(n - 1).
// Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters 
// (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters 
// (length of the run). 
// For example, to compress the string "3322251" we replace "33" with "23", 
// replace "222" with "32", replace "5" with "15" and replace "1" with "11". 
// Thus the compressed string becomes "23321511".
// Given a positive integer n, return the nth element of the count-and-say sequence.
// https://leetcode.com/problems/count-and-say/submissions/
// connect: regex, recursion

var countAndSay = function(n: number): string {
  if (n == 1) {
      return "1"
  } else {
      let prev = countAndSay(n - 1)
      let groups = `${prev}`.match(/(\d)\1*/g)
      let next = groups!.reduce( (ac, g) => `${ac}${g.length}${g.charAt(0)}`, '')
      return next
  }
};

test('count and say', () => {
  expect(countAndSay(4)).toBe('1211')
  expect(countAndSay(5)).toBe('111221')
})