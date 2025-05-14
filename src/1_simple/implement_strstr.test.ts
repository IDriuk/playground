// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// https://leetcode.com/problems/implement-strstr/submissions/
// connect: undefined


var strStr = function(haystack: string, needle: string) {
  try { return haystack.match(needle)!.index } catch(e) { return -1}
};

test("return index of the first occurrence", () => {
  expect(strStr("sadbutsad", "sad")).toBe(0)
  expect(strStr("leetcode", "leeto")).toBe(-1)
})