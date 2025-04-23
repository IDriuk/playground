/* 
  28. Implement strStr().

  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Clarification:
  What should we return when needle is an empty string? This is a great question to ask during an interview.
  For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

export function strStr(a: string, b: string): number {
  let n = a.length;
  let m = b.length;

  if (n == 0 || m == 0) {
    return 0;
  }

  for (let i = 0; i <= n - m; i++) {
    for (let j = 0; j < m; j++) {
      if (a.charAt(i + j) != b.charAt(j)) {
        break;
      }

      if (j == m - 1) {
        return i;
      }
    }
  }

  return -1;
}
