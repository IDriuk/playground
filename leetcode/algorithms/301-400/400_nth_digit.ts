/* 
  400. Nth Digit
  Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

  Note:
  n is positive and will fit within the range of a 32-bit signed integer (n < 231)
*/

export function findNthDigit(n: number) {
  /* quest */
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += ~~((n - 1) / len);
  let s = `${start}`;
  return +s.charAt((n - 1) % len);
}
