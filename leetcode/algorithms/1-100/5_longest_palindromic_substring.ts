/* 
  5. Longest palindromic substring

  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of the s is 1000.
*/
export function getLongestPalindrom(s: string): string {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = extendMiddle(s, i, i + 1);
    let len2 = extendMiddle(s, i, i);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2) + 1;
    }
  }
  return s.substring(start, end);
}

function extendMiddle(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    left--;
    right++;
  }

  return right - left - 1;
}
