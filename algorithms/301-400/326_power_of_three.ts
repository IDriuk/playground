/*
  326. Power of Three
  Given an integer, write a function to determine if it is a power of three.
*/

export function isPowerOfThree(n: number) {
  return (Math.log10(n) / Math.log10(3)) % 1 == 0;
}
