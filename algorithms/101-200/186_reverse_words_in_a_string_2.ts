/*
  186. Reverse Words in a String II
  Given an input string, reverse the string word by word.

  Note:
  A word is defined as a sequence of non-space characters.
  The input string does not contain leading or trailing spaces.
  The words are always separated by a single space.

  Follow up:
  Could you do it in-place without allocating extra space?
*/

function reverse(str: string[], l: number, r: number) {
  while (l < r) {
    let tmp = str[l];
    str[l++] = str[r];
    str[r--] = tmp;
  }
}

export function reverseWords2(str: string[]) {
  reverse(str, 0, str.length - 1);
  let r = 0;

  while (r < str.length) {
    let l = r;
    while (r < str.length && str[r] != " ") {
      r++;
    }
    reverse(str, l, r - 1);
    r++;
  }
}
