// Word Break
// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
// https://leetcode.com/problems/word-break/
// connect: dp, interesting

var wordBreak = function(s: string, wordDict: string[]) {
  let len = s.length
  let table = Array(s.length + 1).fill(null).map( el => Array(s.length + 1).fill(false))
  
  table[0][len] = true
  
  for (let i = 1; i < len + 1; i++ ) {
      for (let j = 0; j < len + 1; j++) {
          let prev = table[i - 1][j]
          if (prev) {
              for (let w of wordDict) {
                  let wsub = s.substr(len - j, w.length)
                  if (w == wsub) {
                      let cur = j - w.length
                      if ( cur > 0) {
                          table[i][cur] = true 
                      } else if ( cur == 0) {
                          return true
                      }
                  }
              }   
          }
      }
  }
  
  return false
};

test("word break", () => {
  expect(wordBreak("leetcode", ["leet","code"])).toBe(true)
  expect(wordBreak("applepenapple", ["apple","pen"])).toBe(true)
  expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"])).toBe(false)
})