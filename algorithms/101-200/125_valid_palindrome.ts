/*
  125. Valid Palindrome
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  Note: For the purpose of this problem, we define empty string as valid palindrome.
*/

export function isPalindrome(s: string): boolean {
  if (s == null) {
    return true;
  }

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    while (i <= j && !/([a-zA-Z])|([0-9])/.test(s.charAt(i))) {
      i++;
    }
    while (i <= j && !/([a-zA-Z])|([0-9])/.test(s.charAt(j))) {
      j--;
    }
    if (i > j) {
      return true;
    }
    if (s.charAt(i).toLocaleLowerCase() != s.charAt(j).toLocaleLowerCase()) {
      return false;
    }
  }
  return true;
}
