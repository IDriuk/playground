/* 
  316. Remove Duplicate Letters 
  Given a string which contains only lowercase letters, 
  remove duplicate letters so that every letter appear once and only once.
  You must make sure your result is the smallest in lexicographical order among all possible results
*/

export function removeDuplicateLetters(s: string): string {
  if (s == null || s.length <= 1) {
    return s;
  }
  let count = new Array<number>(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  let minPos = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < s.charCodeAt(minPos)) {
      minPos = i;
    }
    if (--count[s.charCodeAt(i) - "a".charCodeAt(0)] == 0) {
      break;
    }
  }
  let minChar = s.charAt(minPos);
  let dedupedStr = s.substring(minPos + 1).replaceAll(s.charAt(minPos), "");
  return minChar + removeDuplicateLetters(dedupedStr);
}
