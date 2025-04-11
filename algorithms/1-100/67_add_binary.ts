/* 
  67. Add Binary
  Given two binary strings, return their sum (also a binary string).
  The input strings are both non-empty and contains only characters 1 or 0
*/

export function addBinary(a: string, b: string): string {
  let sum: number[] = [];

  let i = a.length - 1;
  let j = b.length - 1;
  let c = 0;

  while (i >= 0 || j >= 0 || c == 1) {
    // @ts-ignore
    c += i >= 0 ? a.charAt(i--) - "0" : 0;
    // @ts-ignore
    c += j >= 0 ? b.charAt(j--) - "0" : 0;

    sum.unshift(c % 2);
    c >>= 1;
  }

  return sum.join("");
}
