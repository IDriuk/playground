/*
  132. Palindrome Partitioning II
  Given a string s, partition s such that every substring of the partition is a palindrome.
  Return the minimum cuts needed for a palindrome partitioning of s.
*/

import { isPalindrome } from "./125_valid_palindrome";

export function palindromePartition2(s: string): number {
  let palin: Set<string> = new Set();

  return minCut(s, 0, palin);
}

function minCut(s: string, count: number, palin: Set<string>): number {
  if (s == null || s.length == 0 || isPalindrome(s)) {
    palin.add(s);
    return count;
  }
  let min = Infinity;
  for (let i = s.length - 1; i > 0; i--) {
    if (isPalindrome(s.substring(0, i))) {
      palin.add(s.substring(0, i));
      let result = palin.has(s.substring(i))
        ? count
        : minCut(s.substring(i), count + 1, palin);
      min = Math.min(min, result);
    }
  }
  return min;
}
