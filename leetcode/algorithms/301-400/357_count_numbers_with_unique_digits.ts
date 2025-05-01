/*
  357. Count Numbers with Unique Digits
  Given a non-negative integer n,
  count all numbers with unique digits, x, where 0 <= x < 10^n
*/

export function countNumberWithUniqueDigits(n: number) {
  if (n == 0) {
    return 1;
  }

  let res = 10;
  let uniqueDigits = 9;
  let avaliableNums = 9;
  while (n > 1 && avaliableNums > 0) {
    uniqueDigits *= avaliableNums;
    res += uniqueDigits;
    avaliableNums--;
    n--;
  }
  return res;
}
