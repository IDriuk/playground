/*
  201. Bitwise AND of Numbers Range
  Given a range [m, n] where 0 <= m <= n <= 2147483647 ,
  return the bitwise AND of all numbers in this range, inclusive.
*/

export function rangeBitwiseAnd(m: number, n: number): number {
  if (m == 0) {
    return 0;
  }

  let moveFactor = 1;

  while (m != n) {
    m >>= 1;
    n >>= 1;
    moveFactor <<= 1;
  }

  return m * moveFactor;
}
