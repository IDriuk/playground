/* 
  32. Longest Valid Parentheses
  Given a string containing just the characters '(' and ')',
  find the length of the longest valid well-formed parentheses substring.
*/

export function longestValidParentheses(str: string): number {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let ar = str.split("");

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == "(") {
      left++;
    } else {
      right++;
    }

    if (left == right) {
      maxLen = Math.max(maxLen, 2 * left);
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;

  for (let i = ar.length - 1; i >= 0; i--) {
    if (ar[i] == ")") {
      right++;
    } else {
      left++;
    }

    if (left == right) {
      maxLen = Math.max(maxLen, 2 * right);
    } else if (left > right) {
      right = 0;
      left = 0;
    }
  }

  return maxLen;
}
