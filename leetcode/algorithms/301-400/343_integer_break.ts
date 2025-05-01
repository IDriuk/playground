/*
  343. Integer Break
  Given a positive integer n,
  break it into the sum of at least two positive integers and maximize the product of those integers.
  Return the maximum product you can get.
*/

export function integerBreak(n: number) {
  if (n == 2) {
    return 1;
  }
  if (n == 3) {
    return 2;
  }

  let product = 1;
  while (n > 4) {
    product *= 3;
    n -= 3;
  }

  return product * n;
}
