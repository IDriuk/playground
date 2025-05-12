// First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
// connect: undefined

var firstUniqChar = function(s: string) {
  let chars = s.split('')
  let set: Record<string, string | number> = {}
  
  for ( let i = 0; i < chars.length; i++) {
      if (!set[chars[i]] && set[chars[i]] != 0) {
          set[chars[i]] = i
      } else {
          set[chars[i]] = 'R'
      }
  }
  
  let min = chars.length
  for ( let i of Object.values(set) ) {
      
      if (i != 'R' && +i < min) {
          min = +i
      }
  }
  
  return min == chars.length ? -1 : min
};


test("find first unique character", () => {
  expect(firstUniqChar("leetcode")).toBe(0)
  expect(firstUniqChar("loveleetcode")).toBe(2)
  expect(firstUniqChar("aabb")).toBe(-1)
})