/*
  231. Power of Two
  Given an integer, write a function to determine if it is a power of two.
*/

export function isPowerOfTwo(n: number) {
  return n > 0 && (n & (n - 1)) == 0;
}
