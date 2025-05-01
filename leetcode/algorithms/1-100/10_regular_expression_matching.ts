/* 
  10. Regular Expression Matching
  
  Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
  '.' Matches any single character
  '*' Matches zero or more of the preceding element.
  The matching should cover the entire input string (not partial).

  Note:
    s could be empty and contains only lowercase letters a-z
    p could be empty and contains only lowercase letters a-z,  and characters like . or *.
*/
export function isMatchingRegex(str: string, pattern: string): boolean {
  let s = str.split("");
  let p = pattern.split("");
  let sL = s.length;
  let pL = p.length;

  let d = Array(s.length + 1)
    .fill(null)
    .map(() => Array(p.length + 1).fill(false));
  d[sL][pL] = true;

  for (let i = sL - 1; i >= 0; i--) {
    for (let j = pL - 1; j >= 0; j--) {
      if (p[j] != "*") {
        let match = p[j] == "." || s[i] == p[j];
        let prevMatch = d[i + 1][j + 1];
        let asterixMatch = p[j + 1] == "*" && (d[i + 1][j] || d[i + 1][j + 2]);
        if (match && (prevMatch || asterixMatch)) {
          d[i][j] = true;
        }
      } else if (d[i][j + 1]) {
        d[i][j - 1] = true;
      }
    }
  }

  return d[0][0];
}
