// Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
// You may return the answer in any order.
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// connect: slide

/* var findAnagrams = function(s, p) {
  let slen = s.length
  let plen = p.length
  if ( s == "" || p == "" || slen < plen ) {
      return []
  }
  
  let ps = p.split("").sort().join("")
  let res = []
  
  for (let i = 0; i < slen - plen + 1; i++) {
      let sub = s.substr(i, plen).split("").sort().join("")
      if (sub == ps) {
          res.push(i)
      }
  }
  
  return res
}; */

var findAnagrams = function(s: string, p: string) {
  let slen = s.length
  let plen = p.length
  if ( s == "" || p == "" || slen < plen ) {
      return []
  }

  let pMap: Record<string, number> = {}

  for ( let l of p.split("")) {
    pMap[l] = pMap[l] ? pMap[l] + 1 : 1
  }

  let sMap: Record<string, number> = {}

  for ( let l of s.substr(0, plen).split("")) {
    sMap[l] = sMap[l] ? sMap[l] + 1 : 1
  }

  let isAn = isEqual(sMap, pMap)
  let res = isAn ? [0] : []

  for (let i = 0; i < slen - plen; i++) {
    let left = s.charAt(i)
    let right = s.charAt(i + plen)
      
    if (left != right) {
      sMap[left]--
      sMap[right] = sMap[right] ? sMap[right] + 1 : 1
      isAn = isEqual(sMap, pMap)
    }

    if (isAn) {
      res.push(i + 1)
    }
  
  }

  return res

  function isEqual(sm: Record<string, number>, pm: Record<string, number>) {
    let result = true
    for (let i in sm) {
      if (sm[i] && sm[i] != pm[i]) {
        return false
      }
    }
    
    return result
  }
};

test("search for anagrams in the string", () => {
  expect(findAnagrams("cbaebabacd", "abc")).toEqual([0,6])
  expect(findAnagrams("abab", "ab")).toEqual([0,1,2])
})