/*
  242. Valid Anagram
  Given two strings s and t, write a function to determine if t is an anagram of s.
*/

export function isAnagram(s: string, t: string) {
  if (s.length != t.length) {
    return false;
  }

  let str1 = s.split("");
  let str2 = t.split("");
  str1.sort();
  str2.sort();

  return str1.join("") == str2.join("");
}
