/*
  161. One Edit Distance
  Given two strings s and t, determine if they are both one edit distance apart.

  Note:
  There are 3 possibilities to satisfy one edit distance apart:
  Insert a character into s to get t
  Delete a character from s to get t
  Replace  a character of s to get t
*/

export function isOneEditDistance(s: string, t: string): boolean {
  let m = s.length;
  let n = t.length;
  if (m > n) {
    return isOneEditDistance(t, s);
  }

  if (n - m > 1) {
    return false;
  }

  for (let i = 0; i < m; i++) {
    if (s.charAt(i) != t.charAt(i)) {
      if (m == n) {
        return s.substring(i + 1) == t.substring(i + 1);
      } else if (m < n) {
        return s.substring(i) == t.substring(i + 1);
      }
    }
  }

  return m != n;
}
