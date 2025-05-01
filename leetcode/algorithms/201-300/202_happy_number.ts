/*
  202. Happy Number
  Write an algorithm to determine if a number is "happy".

  A happy number is a number defined by the following process:
  Starting with any positive integer, replace the number by the sum of the squares of its digits,
  and repeat the process until the number equals 1 (where it will stay),
  or it loops endlessly in a cycle which does not include 1.
  Those numbers for which this process ends in 1 are happy numbers.
*/

export function happyNumber(n: number): boolean {
  if (n < 1) {
    return false;
  }

  let results = new Set<number>();
  while (!results.has(n)) {
    results.add(n);
    n = digitSquareNum(n);
  }

  return n == 1;
}

function digitSquareNum(n: number): number {
  let res = 0;
  let d: number;

  while (n > 0) {
    d = n % 10;
    res += d * d;
    n = Math.floor(n / 10);
  }

  return res;
}
