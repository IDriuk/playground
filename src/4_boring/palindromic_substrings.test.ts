// Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.
// https://leetcode.com/problems/palindromic-substrings/
// connect: undefined

var countSubstrings = function(s: string) {
  let l = s.length
  let res = 0
  
  for (let c = 0; c <= 2*l - 1; c++) {
      let left = c / 2
      let right = left + c % 2
      while ( left >= 0 && right < l && s.charAt(left) == s.charAt(right)) {
          res++
          left--
          right++
      }
  }
  
  return res
};

test("palindromic substrings", () => {
  expect(countSubstrings("abc")).toBe(3)
  expect(countSubstrings("aaa")).toBe(6)
})