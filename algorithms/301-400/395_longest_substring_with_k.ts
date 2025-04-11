/*
  395. Longest Substring with at least k repeating characters
  Find the length of the longest substring T of a given string (consists of lowercase letters only)
  such that every character in T appears no less than k times.
*/

export function longestSubstringWithKRepeating(s: string, k: number) {
  return helper(s, 0, s.length, k);
}

function helper(s: string, start: number, end: number, k: number): number {
  if (end < start) {
    return 0;
  }
  if (end - start < k) {
    return 0;
  }
  let count = new Array<number>(26).fill(0);

  for (let i = start; i < end; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] == 0) {
      continue;
    }
    if (count[i] < k) {
      for (let j = start; j < end; j++) {
        if (s.charAt(j) == String.fromCharCode(i + "a".charCodeAt(0))) {
          let left = helper(s, start, j, k);
          let right = helper(s, j + 1, end, k);
          return Math.max(left, right);
        }
      }
    }
  }
  return end - start;
}
