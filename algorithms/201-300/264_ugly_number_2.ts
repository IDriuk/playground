/*
  264. Ugly Number II
  Write a program to find the n-th ugly number.

  Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
*/

export function uglyNumber2(n: number) {
  if (n <= 0) {
    return -1;
  }
  if (n == 1) {
    return 1;
  }

  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  let uglyNums: number[] = [];
  uglyNums[0] = 1;

  for (let i = 1; i < n; i++) {
    uglyNums[i] = Math.min(
      uglyNums[p2] * 2,
      uglyNums[p3] * 3,
      uglyNums[p5] * 5,
    );
    if (uglyNums[i] == uglyNums[p2] * 2) {
      p2++;
    }
    if (uglyNums[i] == uglyNums[p3] * 3) {
      p3++;
    }
    if (uglyNums[i] == uglyNums[p5] * 5) {
      p5++;
    }
  }

  return uglyNums[n - 1];
}
