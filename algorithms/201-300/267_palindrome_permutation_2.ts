/*
  267. Palindrome Permutation II
  Given a string s, return all the palindromic permutations (without duplicates) of it. 
  Return an empty list if no palindromic permutation could be form.
*/

export function palindromePermutation2(s: string) {
  let set = new Set<string>();
  let map: { [key: string]: number } = {};
  let st = Array(Math.floor(s.length / 2)).fill(0);
  if (!canPermutePalindrome(s, map)) {
    return [];
  }
  let ch: number | string = 0;
  let k = 0;

  for (let [key, val] of Object.entries(map)) {
    if (val % 2 == 1) {
      ch = key;
    }
    for (let j = 0; j < val / 2; j++) {
      st[k++] = key;
    }
  }

  permute(st, 0, ch);

  return Array.from(set);

  function canPermutePalindrome(s: string, map: { [key: string]: number }) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
      map[s.charAt(i)] = map[s.charAt(i)] ? map[s.charAt(i)] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
      if (map[s.charAt(i)] % 2 != 0) {
        count--;
      }
    }

    return count >= 0;
  }

  function permute(s: string[], l: number, ch: number | string) {
    if (l == s.length) {
      set.add(s.join("") + (ch == 0 ? "" : ch) + [...s].reverse().join(""));
    } else {
      for (let i = l; i < s.length; i++) {
        if (s[l] != s[i] || l == i) {
          swap(s, l, i);
          permute(s, l + 1, ch);
          swap(s, l, i);
        }
      }
    }
  }

  function swap(s: string[], i: number, j: number) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
}
