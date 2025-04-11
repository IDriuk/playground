/*
  387. First Unique Character in a String.
  Given a string, find the first non-repeating character in it and return it's index.
  If it doesn't exist, return -1.
*/

export function firstUniqChar(s: string) {
  if (s == null || s.length == 0) {
    throw new Error("Input string must exist or be non-empty");
  }
  let counts: number[][] = Array(26)
    .fill(null)
    .map((_) => Array(2).fill(0));
  let chs: string[] = s.split("");
  for (let i = 0; i < chs.length; i++) {
    let idx = chs[i].charCodeAt(0) - "a".charCodeAt(0);
    if (counts[idx][0] == 0) {
      counts[idx][1] = i;
    }
    counts[idx][0]++;
  }

  let minIdx = Infinity;
  for (let c of counts) {
    if (c[0] == 1 && c[1] < minIdx) {
      minIdx = c[1];
    }
  }

  return minIdx == Infinity ? -1 : minIdx;
}
