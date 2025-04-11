/*
  3. Longest Substring Without Repeating Characters

  Given a string, find the length of the longest substring without repeating characters.
*/

export function longestWithoutRepeating(s: string): number {
  let res = 0;
  let map = new Map<string, number>();

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    i = Math.max(map.get(s.charAt(j)) || 0, i);
    res = Math.max(j + 1 - i, res);
    map.set(s.charAt(j), j + 1);
  }
  return res;
}
