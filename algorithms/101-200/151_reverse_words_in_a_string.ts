/* 
  151. Reverse Words in a String
  Given an input string, reverse the string word by word.

  Note: 
  A word is defined as a sequence of non-space characters.
  Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
  You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

export function reverseWords(s: string): string {
  if (s == null || s.length == 0) {
    return "";
  }
  s = s.trim();
  let res: string[] = [];
  let words = s.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (!(words[i] == "")) {
      res.push(words[i]);
      if (i != 0) {
        res.push(" ");
      }
    }
  }
  return res.join("");
}
