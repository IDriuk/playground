// Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', 
// return the length of the longest valid (well-formed) parentheses substring.
// https://leetcode.com/problems/longest-valid-parentheses/submissions/
// connect: stack, interesting

var longestValidParentheses = function(s: string) {
  let max = 0
  let stack = [-1]
  
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) == '(') {
          stack.push(i)
      } else {
          stack.pop()
          if (!stack.length) {
              stack.push(i)
          } else {
              max = Math.max(max, i - stack[stack.length - 1])
          }
      }
  }
  
  return max
};

test("longest valid parentheses", () => {
  expect(longestValidParentheses("(()")).toBe(2)
  expect(longestValidParentheses(")()())")).toBe(4)
})