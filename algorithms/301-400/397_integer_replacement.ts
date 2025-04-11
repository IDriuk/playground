/*
  397. Integer Replacement
  Given a positive integer n and you can do operations as follow:
  If n is even, replace n with n/2.
  If n is odd, you can replace n with either n + 1 or n - 1.
  What is the minimum number of replacements needed for n to become 1?
*/

export function integerReplacement(n: number) {
  let c = 0;
  while (n != 1) {
    if ((n & 1) == 0) {
      n >>>= 1;
    } else if (n == 3 || ((n >>> 1) & 1) == 0) {
      n--;
    } else {
      n++;
    }
    c++;
  }
  return c;
}
