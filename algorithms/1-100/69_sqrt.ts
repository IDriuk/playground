/*  
  69. Sqrt(x)
  Implement int sqrt(int x)
  Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
  Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
*/

export function sqrt(x: number): number {
  if (x <= 1) return x;
  let lo = 1;
  let hi = Math.floor(x / 2);
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let t = Math.floor(x / mid);
    if (mid == t) return mid;
    if (mid > t) hi = mid - 1;
    else lo = mid + 1;
  }
  return hi;
}
