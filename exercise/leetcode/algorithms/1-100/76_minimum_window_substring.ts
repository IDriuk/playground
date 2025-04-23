/*
  76. Minimum Window Substring
  Given a string S and a string T, find the minimum window ins S which will contain all the characters in T in complexity O(n).
  Note:
   If there is no such window in S that covers all characters in T, return the empty string "".
   If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

type Pair = {
  i: number;
  c: string;
};

export function minimumWindowSubstring(s: string, t: string): string {
  if (s.length == 0 || t.length == 0) {
    return "";
  }

  let dictT = new Map<string, number>();

  for (let i = 0; i < t.length; i++) {
    let count = dictT.get(t.charAt(i)) || 0;
    dictT.set(t.charAt(i), count + 1);
  }

  let recuired = dictT.size;
  let filteredS: Array<Pair> = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (dictT.has(c)) {
      filteredS.push({ i, c });
    }
  }

  let l = 0;
  let r = 0;
  let formed = 0;

  let windowCounts = new Map<string, number>();
  let ans = [-1, 0, 0];

  while (r < filteredS.length) {
    let c = filteredS[r].c;
    let count = windowCounts.get(c) || 0;
    windowCounts.set(c, count + 1);

    if (dictT.has(c) && windowCounts.get(c) == dictT.get(c)) {
      formed++;
    }

    while (l <= r && formed == recuired) {
      c = filteredS[l].c;
      let end = filteredS[r].i;
      let start = filteredS[l].i;
      if (ans[0] == -1 || end - start + 1 < ans[0]) {
        ans[0] = end - start + 1;
        ans[1] = start;
        ans[2] = end;
      }

      windowCounts.set(c, windowCounts.get(c)! - 1);
      if (dictT.has(c) && windowCounts.get(c)! < dictT.get(c)!) {
        formed--;
      }
      l++;
    }
    r++;
  }

  return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
}
