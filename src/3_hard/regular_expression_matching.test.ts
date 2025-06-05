// Regular Expression Matching
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
// https://leetcode.com/problems/regular-expression-matching/

var isMatch = function(str: string, patr: string) {
  let s = str.split('')
  let p = patr.split('')
  let sl = s.length
  let pl = p.length
  
  let dp = new Array(sl + 1).fill(null).map(_ => new Array(pl + 1).fill(false))
  dp[sl][pl] = true
  
  for (let i = sl; i >= 0; i--) {
      for (let j = pl - 1; j >= 0; j--) {
          let fm = i < sl && (p[j] == s[i] || p[j] == '.')
          if (j + 1 < pl && p[j + 1] == '*') {
              dp[i][j] = dp[i][j + 2] || fm && dp[i + 1][j]
          } else {
              dp[i][j] = fm && dp[i + 1][j + 1]
          }
      }
  }
  
  return dp[0][0]
};

test (" regular expression matching", () => {
  expect(isMatch('aa','a')).toBe(false)
  expect(isMatch('aa','a*')).toBe(true)
  expect(isMatch('ab','.*')).toBe(true)
})