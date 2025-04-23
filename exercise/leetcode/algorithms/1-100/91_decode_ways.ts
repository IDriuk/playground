/*
  91. Decode Ways
  A message containing letters from A-Z is being encoded to numbers using the following mapping:
  'A' -> 1
  'B' -> 2
  ...
  'Z' -> 26

  Given a non-empty string containing only digits, determine the total number of ways to decode it.
*/

export function decodeWays(s: string): number {
  if (s == null || s.length == 0) {
    return 0;
  }

  let pre = 1;
  let cur = s.charAt(0) == "0" ? 0 : 1;
  for (let i = 2; i <= s.length; i++) {
    let oneD = Number(s.substring(i - 1, i));
    let twoD = Number(s.substring(i - 2, i));
    let temp = cur;
    cur = (oneD != 0 ? cur : 0) + (10 <= twoD && twoD <= 26 ? pre : 0);
    pre = temp;
  }
  return cur;
}
