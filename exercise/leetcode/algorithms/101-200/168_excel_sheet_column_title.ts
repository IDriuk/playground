/* 
  168. Excel Sheet Column Title
  Given a positive integer, return its corresponding column title as appear in an Excel sheet.
  For example:
  1 -> A
  2 -> B
  3 -> C
  ...
  26 -> Z
  27 -> AA
  28 -> AB
  ...
*/

export function convertToTitle(n: number) {
  let res: string[] = [];
  while (n > 0) {
    n--;
    let char = String.fromCharCode("A".charCodeAt(0) + (n % 26));
    res.unshift(char);
    n = Math.floor(n / 26);
  }
  return res.join("");
}
