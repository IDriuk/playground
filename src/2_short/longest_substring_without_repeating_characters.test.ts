// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters
// connect: queue

var lengthOfLongestSubstring = function(s: string) {
  if (s == "") { return 0 }
  
  let max = 0
  let hash: Record<string, boolean> = {}
  let q = []
  let ar = s.split('')
  
  for (let el of ar) {
      if (hash[el]) {
          let letter
          while (letter != el ) {
              letter = q.shift()
              delete hash[letter!]
          }
      }
      hash[el] = true
      q.push(el)
      max = q.length > max ? q.length : max
  }
  
  return max
};

test("find the longest substring without duplicated characters", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
})
