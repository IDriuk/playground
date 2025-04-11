/*
  159. Longest Substring with At Most Two Distinct Characters.
  Given a string s, find the length of the longest substring t that contains at most 2 distinct characters.
*/

export function longestWithTwoDistinct(s: string): number {
  if (s == null || s.length == 0) {
    return 0;
  }

  let maxNumberOfDistincts = 2;

  if (s.length < maxNumberOfDistincts + 1) {
    return s.length;
  }

  let length = 1;

  let letterToCounts: Map<string, number> = new Map();

  for (let start = 0, end = 0; end < s.length; end++) {
    while (end < s.length) {
      let letter = s.charAt(end);
      letterToCounts.set(letter, (letterToCounts.get(letter) ?? 0) + 1);
      if (letterToCounts.size > maxNumberOfDistincts) {
        break;
      }
      if (length < end - start + 1) {
        length = end - start + 1;
      }
      end++;
    }
    while (start <= end && letterToCounts.size > maxNumberOfDistincts) {
      let letter = s.charAt(start);
      let count = letterToCounts.get(letter);
      if (count == 1) {
        letterToCounts.delete(letter);
      } else {
        letterToCounts.set(letter, letterToCounts.get(letter)! - 1);
      }
      start++;
    }
  }
  return length;
}
