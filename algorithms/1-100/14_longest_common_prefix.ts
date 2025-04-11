/* 
  14. Longest Common Prefix
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".
  Note: 
  All given inputs are in lowercase letters a-z.
*/

export function longestCommonPrefix(ar: string[]): string {
  if (ar.length == 0) {
    return "";
  } else {
    let prev = ar.shift();

    return longest(ar, prev as string);
  }
}

function longest(ar: string[], s: string): string {
  if (ar.length == 0) {
    return s;
  } else {
    let next = ar.shift()?.split("");
    let current = s.split("");
    let prefix: string[] = [];
    while (true) {
      let p1 = next?.shift();
      let p2 = current?.shift();
      if (!p1 || !p2 || p1 != p2) {
        return longest(ar, prefix.join(""));
      } else {
        prefix.push(p1);
      }
    }
  }
}
