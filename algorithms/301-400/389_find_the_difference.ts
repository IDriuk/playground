/*
  389. Find the Difference
  Given two strings s and t which consist of only lowercase letters.
  String t is generated by random shuffling string s and then add one more letter at a random position.
  Find the letter that was added in t.
*/

export function findTheDifference(s: string, t: string) {
  let n = t.length;
  let c = t.charCodeAt(n - 1);
  for (let i = 0; i < n - 1; i++) {
    c ^= s.charCodeAt(i);
    c ^= t.charCodeAt(i);
  }
  return String.fromCharCode(c);
}
