/*
  214. Shortest Palindrome
  Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it.
  Find and return the shortest palindrome you can find by performing this transformation.
*/

export function shortestPalindrome(s: string) {
  let n = s.length;
  let rev = s.split("").reverse().join("");
  for (let i = 0; i < n; i++) {
    if (s.substring(0, n - i) == rev.substring(i)) {
      return rev.substring(0, i) + s;
    }
  }
  return "";
}
