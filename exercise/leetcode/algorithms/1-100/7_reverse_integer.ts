/* 
  7. Reverse integer
  Given a 32-bit signed integer, reverse digits of an integer.
  Note:
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [-231, 231-1].
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
export function reverseInteger(num: number): number {
  let sign = num >= 0 ? "+" : "-";
  let res = 0;
  num = Math.abs(num);
  while (num > 0) {
    res = res * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return sign == "-" ? res * -1 : res;
}
