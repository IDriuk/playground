/*
  351. Android Unlock Patterns
  Given an Android 3x3 key lock screen and two integers m and n, where 1 <= m <= n <= 9,
  count the total number of unlock patterns of the Android lock screen,
  which consist of minimum of m keys and maximum n keys.
  Rules for a valid pattern:
  Each pattern must connect at least m keys and at most n keys.
  All the keys must be distinct.
  If the line connecting two consecutive keys in the pattern passes through any other keys,
  the other keys must have previously selected in the pattern.
  No jumps through non selected key is allowed.
  The order of keys used matters.
*/

export function numberOfPatterns(m: number, n: number) {
  let used = Array(9).fill(false);
  let res = 0;

  for (let len = m; len <= n; len++) {
    res += calcPatterns(-1, len);
    for (let i = 0; i < 9; i++) {
      used[i] = false;
    }
  }

  return res;

  function calcPatterns(last: number, len: number) {
    if (len == 0) {
      return 1;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      if (isValid(i, last)) {
        used[i] = true;
        sum += calcPatterns(i, len - 1);
        used[i] = false;
      }
    }
    return sum;
  }

  function isValid(index: number, last: number): boolean {
    if (used[index]) {
      return false;
    }
    if (last == -1) {
      return true;
    }
    if ((index + last) % 2 == 1) {
      return true;
    }
    let mid = Math.floor((index + last) / 2);
    if (mid == 4) {
      return used[mid];
    }
    if (
      index % 3 != last % 3 &&
      Math.floor(index / 3) != Math.floor(last / 3)
    ) {
      return true;
    }
    return used[mid];
  }
}
