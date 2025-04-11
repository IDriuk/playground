/*
  227. Basic Calculator II
  Implement a basic calculator to evaluate a simple expression string.

  The expression string contains only non-negative integers, +, -, *, / operators and empty spaces.
  The integer division should truncate toward zero.

  Note:
  You may assume that the given expression is always valid.
  Do not use the eval built-in library function.
*/

export function basicCalculator2(s: string) {
  let lowVal = 0;
  let highVal = 0;
  let sign = 1;
  let priority = 0;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (/\d/.test(c)) {
      num = num * 10 + parseInt(c);
      if (i == s.length - 1 || !/\d/.test(s.charAt(i + 1))) {
        highVal = ~~(priority == 0
          ? num
          : priority == 1
          ? highVal * num
          : highVal / num);
      }
    } else if (c == "*" || c == "/") {
      priority = c == "*" ? 1 : -1;
      num = 0;
    } else if (c == "+" || c == "-") {
      lowVal += sign * highVal;
      sign = c == "+" ? 1 : -1;
      priority = 0;
      num = 0;
    }
  }

  return lowVal + sign * highVal;
}
