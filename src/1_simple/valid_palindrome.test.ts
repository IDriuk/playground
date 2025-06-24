// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// https://leetcode.com/problems/valid-plindrome/
// connect: interesting

var isPalindrome = function(s: string) {
  let str = s.toLowerCase().replace(/([^a-z0-9])/g, '')
  return str == str.split('').reverse().join('')
};

test(" valid palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  expect(isPalindrome("race a car")).toBe(false)
  expect(isPalindrome(" ")).toBe(true)
})