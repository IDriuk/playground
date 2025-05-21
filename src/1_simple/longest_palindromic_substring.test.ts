// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest palindromic substring in s.
// connect: recursion

var longestPalindrome = function(s: string) {
  if ( s.length <= 1 ) { return s }

  let pal = ""
  
  for (let i = 0; i < s.length; i++) {
      countMax(i, i)
      countMax(i, i + 1)
  }
  
  function countMax(start: number, end: number) {
      if ( 
        s.charAt(start) != s.charAt(end) || 
        start < 0 || 
        end > s.length - 1
      ) {
        return
      }

      let len = end - start + 1
      if( len > pal.length) {
        pal = s.substr(start, len)
      }

      countMax(start - 1, end + 1)
  }

  return pal
};

test("longest palindromic substring", () => {
  expect(longestPalindrome("babad")).toBe("bab")
  expect(longestPalindrome("cbbd")).toBe("bb")
})
