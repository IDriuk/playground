/* 
  22. Generate Parentheses
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

export function generateParentheses(n: number): string[] {
  if (n == 0) {
    return [""];
  }
  let ans = [];
  for (let c = 0; c < n; c++) {
    for (let left of generateParentheses(c)) {
      for (let right of generateParentheses(n - c - 1))
        ans.push("(" + left + ")" + right);
    }
  }
  return ans;
}
