/*
  58.  Length of Last Word 

  Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
  If the last word does not exist, return 0.

  Note:
  A word is defined as a character sequence consist of non-space characters only.
*/

export function lengthOfLastWord(s: string): number {
  s.trim();

  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == " ") {
      return count;
    } else {
      count++;
    }
  }

  return count;
}
