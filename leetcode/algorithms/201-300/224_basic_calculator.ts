/*
  224. Basic Calculator
  Implement a basic calculator to evaluate a simple expression string.

  The expression string may contain open ( and closing parentheses ), the plus + or minus sign -,
  non-negative integers and empty spaces.

  Note:
  You may assume that the given expression is always valid.
  Do not use the eval built-in library function.
*/

export function basicCalculator(s: string) {
  if (s == null || s.length == 0) {
    return 0;
  }

  let result = 0;
  let sign = 1;
  let stack = [sign];
  let num = 0;

  for (let c of s.split("")) {
    if (c >= "0" && c <= "9") {
      num = num * 10 + (c.charCodeAt(0) - "0".charCodeAt(0));
    } else if (c == "+" || c == "-") {
      result += sign * num;
      sign = stack.at(-1)! * (c == "+" ? 1 : -1);
      num = 0;
    } else if (c == "(") {
      stack.push(sign);
    } else if (c == ")") {
      stack.pop();
    }
  }

  result += sign * num;
  return result;
}
