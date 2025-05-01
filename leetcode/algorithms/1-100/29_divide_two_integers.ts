/* 
  29. Divide Two Integers 
  Given two integers dividend and divisor, divide to integers without using multiplication, division and mod operator.
  Return the quotient after dividing dividend by divisor.
  Note:
  Both dividend and divisor will be 32-bit signed integers.
  The divisor will never be 0.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [-231, 231 -1].
  For the purpose of this problem, assume that your function returns 231 -1 when the division result overflows.
*/

export function divide(divident: number, divisor: number): number {
  let isNeg = (divident > 0 && divisor < 0) || (divident < 0 && divisor > 0);
  let d = Math.abs(divident);
  let ds = Math.abs(divisor);

  if (ds == 0) {
    return Number.MAX_SAFE_INTEGER;
  }
  if (d == 0) {
    return 0;
  }
  if (ds == 1) {
    return d;
  }

  let res = 0;
  for (let bit = 20; bit >= 0 && d >= ds; bit--) {
    if (d >= ds << bit) {
      res |= 1 << bit;
      d -= ds << bit;
    }
  }

  return isNeg ? -res : res;
}
