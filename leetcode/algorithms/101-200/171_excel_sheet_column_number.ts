/*
  171. Excel Sheet Column Number
  Given a column title as appear in an Excel sheet,
  return its corresponding column number.
*/

export function titleToNumber(s: string): number {
  if (s == null || s.length == 0) {
    return 0;
  }

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res = res * 26 + (s.charAt(i).charCodeAt(0) - "@".charCodeAt(0));
  }
  return res;
}
