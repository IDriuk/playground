// Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// https://leetcode.com/problems/generate-parentheses/
// connect: interesting, recursion

var generateParenthesis = function(n: number) {
  let res: string[] = []
  
  function backtrack(str: string, open: number, close: number) {
      if (str.length == n * 2) {
          res.push(str)
      }
      
      if ( open < n) {
          backtrack( str + '(', open + 1, close)
      }
      
      if ( close < open) {
          backtrack( str + ')', open, close + 1)
      }
  }
  
  backtrack('', 0, 0)
  return res
};

test("generate all combinations of parentheses", () => {
  expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"])
  expect(generateParenthesis(1)).toEqual(["()"])
})