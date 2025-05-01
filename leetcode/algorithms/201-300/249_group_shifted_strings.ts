/*
  249. Group Shifted Strings
  Given a string, we can "shift" each of its letter to its successive letter, 
  for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:
  "abc" -> "bcd" -> ... -> "xyz"

  Given a list of strings which contains only lowercase alphabets,
  group all strings that belong to the same shifting sequence.
*/

export function groupStrings(strings: string[]) {
  let result: string[][] = [];
  let map = new Map<string, string[]>();

  for (let str of strings) {
    let offset = str.charCodeAt(0) - "a".charCodeAt(0);
    let key = "";
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i) - offset;
      if (c < "a".charCodeAt(0)) {
        c += 26;
      }
      key += String.fromCharCode(c);
    }
    if (!map.has(key)) {
      let list: string[] = [];
      map.set(key, list);
    }
    map.get(key)?.push(str);
  }

  map.forEach((ar) => {
    ar.sort();
    result.push(ar);
  });

  return result;
}
