/*
  396. Rotate Function
  Given an array of integers A and let n to be its length.
  Assume Bk to be an array obtained by rotating the array A k positions clock-wise, 
  we define a "rotation function" F on A as follow:
  F(k) = 0*Bk[0] + 1 * BK[1] + ... + (n-1) * Bk[n - 1].
  Calculate the maximum value of F(0), F(1), ..., F(n-1)
  Note:
  n is guaranteed to be less than 105.
*/

export function maxRotateFunction(A: number[]) {
  let allSum = 0;
  let len = A.length;
  let F = 0;
  for (let i = 0; i < len; i++) {
    F += i * A[i];
    allSum += A[i];
  }
  let max = F;
  for (let i = len - 1; i >= 1; i--) {
    F = F + allSum - len * A[i];
    max = Math.max(F, max);
  }
  return max;
}
