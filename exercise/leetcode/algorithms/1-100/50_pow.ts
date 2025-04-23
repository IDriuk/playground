/*
  50. Pow(x,n)
  Implement pow(x, n), which calculates x raised to the power n (xn).
*/

export function pow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n == 0) {
    return 1;
  }

  let ans = 1;
  let calc = x;

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 == 1) {
      ans *= calc;
    }
    calc = calc * calc;
  }

  return ans;
}
