/* 
  30. Substring with Concatenation of All Words
  You are given a string, s, and a list of words, words, that are all of the same length. 
  Find all starting indices of  substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

  Example 1:
  Input:
  s = "barfoothefoobarman",
  words = ["foo", "bar"]
  Ouput: [0, 9]

  Explanation: 
  Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively. 
  The output order does not matter, returning [9, 0] is fine too.
*/

export function substringWithConcatenation(
  str: string,
  list: string[],
): number[] {
  if (str == null || list == null || list.length == 0) {
    return [];
  }

  let len = list[0].length;
  let res: number[] = [];

  let map = new Map<string, number>();
  for (let i = 0; i < list.length; i++) {
    map.set(list[i], map.get(list[i]) ? map.get(list[i])! + 1 : 1);
  }

  for (let i = 0; i <= str.length - len * list.length; i++) {
    let mapCopy = new Map(map);
    for (let j = 0; j < list.length; j++) {
      let subStr = str.substring(i + j * len, i + j * len + len);
      if (mapCopy.has(subStr)) {
        let count = mapCopy.get(subStr)! - 1;
        if (count > 0) {
          mapCopy.set(subStr, count);
        } else {
          mapCopy.delete(subStr);
        }
        if (mapCopy.size == 0) {
          res.push(i);
        }
      } else {
        break;
      }
    }
  }

  return res;
}
