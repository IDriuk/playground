/*
  383. Ransom Note
  Given an arbitrary ransom note string and another string containing letters from all the magazines,
  write a function that will return true if the ransom note can be constructed from the magazines;
  otherwise, it will return false.
  Each letter in the magazine string can only be used once in your ransom note.
  Note: 
  You may assume that both strings contain only lowercase letters.
*/

export function canConstructRansom(ransomNote: string, magazine: string) {
  let arr = new Array<number>(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    arr[magazine.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (--arr[ransomNote.charCodeAt(i) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }
  return true;
}
