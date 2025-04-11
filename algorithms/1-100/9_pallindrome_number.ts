/* 
  9. Palindrome number
  Determine whether an integer is a palindrome.
  An integer is a palindrome when it reads the same backward as forward.
  Follow up:
  Could you solve it without converting the integer to a string?
*/
export function isPalindromeNumber(num: number): boolean {
  if (num < 0) return false;

  let tmp = num;
  let res = 0;

  while (tmp > 0) {
    let digit = tmp % 10;
    tmp = Math.floor(tmp / 10);
    res = res * 10 + digit;
  }

  return res == num;
}
