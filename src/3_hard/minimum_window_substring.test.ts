// Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, 
// return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 
// If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// https://leetcode.com/problems/minimum-window-substring/
// connect: subarray

var minWindow = function(s: string, t: string) {
  if (s == t || t.length == 0) { return t }
  
  let arS = s.split("")
  let arT = t.split("")
  let lenT = t.length
  
  let hash: Record<string, number> = {}
  for (let c of arT) {
      if (!hash[c]) {
          hash[c] = 1
      } else {
          hash[c] += 1
      }
  }
  
  let minLen = Infinity
  let minSub = ''
  let sub = []
  let subHash: Record<string, number> = {}
  let count = 0
  
  for (let i = 0; i < arS.length; i++) {
      let c = arS[i]
      sub.push(c)
      
      if (!subHash[c]) {
          subHash[c] = 1
      } else {
          subHash[c] += 1
      }
      
      if (hash[c] && hash[c] >= subHash[c]) {
          count++
      }
      
      if (count == lenT) {
          while(true) {
              let l = sub[0]
              if (!hash[l]) {
                  sub.shift()
              } else if (subHash[l] > hash[l]) {
                  sub.shift()
                  subHash[l]--
              } else {
                  if (minLen > sub.length) {
                      minSub = sub.join('')
                      minLen = sub.length
                  }
                  break
              }
          }
          let l = sub.shift()!
          subHash[l]--
          count--
      }
  }
  
  return minSub
};

test("minimum window substring", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC")
  expect(minWindow("a", "a")).toBe("a")
  expect(minWindow("a", "aa")).toBe("")
})