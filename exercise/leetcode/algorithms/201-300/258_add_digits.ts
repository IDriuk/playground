/*
  258. Add Digits
  Given a non-negative integer num,
  repeatedly add all its digits until the result has only one digit.

  Follow up:
  Could you do it without any loop / recursion in O(1) runtime?
*/

export function addDigits(num: number) {
  if (num == 0) {
    return 0;
  }
  return num % 9 == 0 ? 9 : num % 9;
}
