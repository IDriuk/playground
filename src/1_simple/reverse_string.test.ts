// Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// https://leetcode.com/problems/reverse-string/
// connect: undefined


var reverseString = function(s: string[]) {
  let tmp;
  let i = 0;
  let j = s.length - 1
  
  while ( i < j) {
      tmp = s[i]
      s[i] = s[j]
      s[j] = tmp
      i++
      j--
  }
  
  return s
};

test(" reverse string", () => {
  expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"])
  expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"])
})