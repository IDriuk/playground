// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// https://leetcode.com/problems/valid-anagram/submissions/
// connect: interesting

var isAnagram = function(s: string, t: string) {
  return s.split('').sort().join('') == t.split('').sort().join('')
};

test("valid anagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true)
  expect(isAnagram("rat", "car")).toBe(false)
})