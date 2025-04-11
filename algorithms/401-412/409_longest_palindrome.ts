/*
  409. Longest Palindrome
  Given a string which consists of lowercase or uppercase letters,
  find the length of the longest palindromes that can be built with those letters.
  This is case sensitive, for example "Aa" is not considered a palindrome here.
  Note:
  Assume the length of given string will not exceed 1000.
*/

export function longestPalindrome(s: string) {
  let counts: { [index: string]: number } = {};
  let chars = s.split("");
  for (let c of chars) {
    counts[c] = counts[c] ? counts[c] + 1 : 1;
  }
  let maxLength = 0;
  for (let c of Object.values(counts)) {
    maxLength += ~~(c / 2) * 2;
    if (maxLength % 2 == 0 && c % 2 == 1) {
      maxLength++;
    }
  }
  return maxLength;
}
