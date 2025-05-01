/* 
  336. Palindrome Pairs
  Given a list of unique words, find all pairs of distinct indices (i, j) in the given list,
  so that the cocatenation of the two words, i.e. words[i] + words[j] is a palindrome.
*/

export function palindromePairs(words: string[]) {
  if (words == null || words.length < 2) {
    return [];
  }
  let res: number[][] = [];
  let map: { [key: string]: number } = {};

  for (let i = 0; i < words.length; i++) {
    map[words[i]] = i;
  }

  if (map[""] !== undefined) {
    let blankIdx = map[""];
    for (let i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) {
        if (i == blankIdx) {
          continue;
        }
        res.push([blankIdx, i]);
        res.push([i, blankIdx]);
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split("").reverse().join("");
    if (map[reversed] !== undefined) {
      let found = map[reversed];
      if (found != i) {
        res.push([i, found]);
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    let cur = words[i];
    for (let j = 1; j < cur.length; j++) {
      if (isPalindrome(cur.substring(0, j))) {
        let reversed = cur.substring(j).split("").reverse().join("");
        if (map[reversed] !== undefined) {
          let found = map[reversed];
          if (found != i) {
            res.push([found, i]);
          }
        }
      }
      if (isPalindrome(cur.substring(j))) {
        let reversed = cur.substring(0, j).split("").reverse().join("");
        if (map[reversed] !== undefined) {
          let found = map[reversed];
          if (found != i) {
            res.push([i, found]);
          }
        }
      }
    }
  }

  return res;
}

function isPalindrome(s: string) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
    }
  }
  return true;
}
