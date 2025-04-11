/* 
  66. Plus One
  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
  The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
  You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

export function plusOne(num: number[]): number[] {
  for (let i = num.length - 1; i >= 0; i--) {
    num[i] = num[i] + 1;
    if (num[i] == 10) {
      num[i] = 0;
    } else {
      return num;
    }
  }

  let ans: number[] = [];
  ans[0] = 1;
  for (let i = 0; i < num.length; i++) {
    ans[i + 1] = num[i];
  }

  return ans;
}
