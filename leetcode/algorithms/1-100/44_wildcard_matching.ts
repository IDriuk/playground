/*
  44. Wildcard Matching

  Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
  '?' Matches any single character
  '*' Matches any sequence of characters (including the empty sequence).

  The matching should cover the entire input string (not partial).

  Note:
  s could be empty and contains only lowercase letters a-z.
  p could be empty and contains only lowercase letters a-z, and characters like ? or *.
*/
export function wildcardMatch(s: string, p: string): boolean {
  if (s == null && p == null) {
    return true;
  }

  if ((s == null && p != null) || (s != null && p == null)) {
    return false;
  }

  let m = s.length;
  let n = p.length;
  let match = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(false));
  match[0][0] = true;

  for (let i = 1; i <= n; i++) {
    if (p.charAt(i - 1) == "*") {
      match[0][i] = true;
    } else {
      break;
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p.charAt(j - 1) != "*") {
        match[i][j] =
          match[i - 1][j - 1] &&
          (p.charAt(j - 1) == s.charAt(i - 1) || p.charAt(j - 1) == "?");
      } else {
        match[i][j] = match[i][j - 1] || match[i - 1][j];
      }
    }
  }

  return match[m][n];
}
