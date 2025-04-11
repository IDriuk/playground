/*
  49. Group Anagrams  
  Given an array of strings, group anagrams together.

  Note:
  All inputs will be in lowercase.
  The order of your output does not matter.
*/

export function groupAnagrams(strs: string[]): string[][] {
  if (!strs || strs.length == 0) {
    return [];
  }

  let hash = new Map<string, string[]>();

  for (let s of strs) {
    let count = Array<number>(26).fill(0);
    for (let c of s) {
      let pos = c.charCodeAt(0) - "a".charCodeAt(0);
      count[pos]++;
    }
    let key = "";
    for (let pos of count) {
      key += `#${pos}`;
    }

    !hash.has(key) ? hash.set(key, [s]) : hash.set(key, [...hash.get(key)!, s]);
  }

  return Array.from(hash.values());
}
