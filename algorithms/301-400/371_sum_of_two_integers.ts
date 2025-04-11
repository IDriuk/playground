/*
  371. Sum of Two Integers (quest)
  Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/

export function sumRecursive(a: number, b: number) {
  if (b == 0) {
    return a;
  }
  return sumRecursive(a ^ b, (a & b) << 1);
}
