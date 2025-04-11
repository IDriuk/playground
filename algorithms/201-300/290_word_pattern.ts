/*
  290. Word Pattern
  Given a pattern and a string str,
  find if str follows the same pattern.

  Here follow means a full match, 
  such that there is a bijection between a letter in pattern and a non-empty word in str.
*/

export function wordPattern(p: string, s: string) {
  let a1 = p.split("");
  let a2 = s.split(` `);
  if (a1.length != a2.length) {
    return false;
  }
  let map: { [key: string]: string } = {};
  for (let i = 0; i < a1.length; i++) {
    let l = a1[i];
    let w = a2[i];
    if (!map[l]) {
      map[l] = w;
    } else if (map[l] != w) {
      return false;
    }
  }

  let set = new Set<string>();
  for (let w of Object.values(map)) {
    if (set.has(w)) {
      return false;
    } else {
      set.add(w);
    }
  }

  return true;
}
