/*
  205. Isomorphic Strings
  Given two strings s and t, determine if they are isomorphic.

  Two strings are isomorphic if the characters in s can be replaced to get t.

  All occurrences of a character must be replaced with another character while preserving the order of characters.
  No two characters may map to the same character but a character may map to itself.

  Note: 
  You may assume both s and t have the same length.
*/

export function isIsomorphic(s: string, t: string): boolean {
  if (s == null || t == null) {
    return false;
  }
  let m = new Array(512).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (m[s.charCodeAt(i)] != m[t.charCodeAt(i) + 256]) {
      return false;
    }
    m[s.charCodeAt(i)] = i + 1;
    m[t.charCodeAt(i) + 256] = i + 1;
  }

  return true;
}
