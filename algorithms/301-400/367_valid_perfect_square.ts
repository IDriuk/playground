/*
  367. Valid Perfect Square
  Given a positive integer num,
  write a function which returns True if num is a perfect square else False.
  Note: Do not use any built-in library function such as sqrt.
*/

export function isPerfectSquare(num: number) {
  if (num < 4) {
    return num == 1;
  }

  let lo = 1;
  let hi = ~~(num / 2);
  while (lo <= hi) {
    let mid = lo + ~~((hi - lo) / 2);
    let t = mid * mid;
    if (t == num) {
      return true;
    } else if (t > num) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return false;
}
