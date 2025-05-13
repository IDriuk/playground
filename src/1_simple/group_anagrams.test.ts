// Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// https://leetcode.com/problems/group-anagrams/
// connect: undefined

var groupAnagrams = function(strs: string[]) {
  let sMap: Record<string, string[]> = {}
  
  for (let s of strs) {
      let sorted = s.split('').sort().join('')
      if (sMap[sorted]) {
          sMap[sorted].push(s)
      } else {
          sMap[sorted] = [s]
      }
  }
  
  return Object.entries(sMap).map( x => x[1])
};

test("should return anagrams groups", () => {
  expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([
    [
        "eat",
        "tea",
        "ate"
    ],
    [
        "tan",
        "nat"
    ],
    [
        "bat"
    ]
])
  
})