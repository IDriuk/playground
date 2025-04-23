/*
  131. Palindrome Partitioning
  Given a string s, partition s such that every substring of the partition is a palindrome.
  Return all possible palindrome partitioning of s.
*/

import { isPalindrome } from "./125_valid_palindrome";

export function palindromePartition(s: string): string[][] {
  let res: string[][] = [];
  if (s == null || s.length == 0) {
    return res;
  }
  partition(s, 0, res, []);

  return res;
}

function partition(s: string, pos: number, res: string[][], cut: string[]) {
  if (pos == s.length) {
    res.push([...cut]);
    return;
  }
  for (let i = pos + 1; i <= s.length; i++) {
    let prefix = s.substring(pos, i);
    if (isPalindrome(prefix)) {
      cut.push(prefix);
      partition(s, i, res, cut);
      cut.pop();
    }
  }
}
