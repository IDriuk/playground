/*
  342. Power of Four
  Given an integer (signed 32 bits), 
  write a function to check whether it is a power of 4.
  Follow up: Could you solve it without loops/recursion ?
*/

export function isPowerOfFour(num: number) {
  return num > 0 && (num & (num - 1)) == 0 && num % 3 == 1;
}
