/*
  338. Counting Bits
  Given a non negative integer number num.
  For every numbers i in the range 0 <= i <= num 
  calculate the number of 1's in their binary representation and return them as an array.
*/

export function countBits(num: number) {
  let ans = [0];
  for (let i = 1; i <= num; i++) {
    ans[i] = ans[i & (i - 1)] + 1;
  }
  return ans;
}
