/*
  172. Factorial Trailing Zeroes

  Given an integer n, return the number of trailing zeroes in n!.

  Note: 
  Your solution should be in logarithmic time complexity.
*/

export function factorialTrailingZeroes(n: number): number {
  let res = 0;

  while (n > 0) {
    res += ~~(n / 5);
    n = ~~(n / 5);
  }

  return res;
}
