// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// https://leetcode.com/problems/longest-common-prefix/
// connect: undefined

var longestCommonPrefix = function(strs: string[]) {
  if (!strs.length) return ''
  let prefix = strs[0]
  for ( let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) != 0) {
          prefix = prefix.substring(0, prefix.length -1)
          if (prefix == '') return ''
      }
  }
  return prefix
};

test("longest common prefix", () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
})