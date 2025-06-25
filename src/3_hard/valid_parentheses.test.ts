// Valid parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// https://leetcode.com/problems/valid-parentheses/submissions/
// connect: interesting

var isValid = function(s: string) {
  if (!s || s == "") return true
  let ar = s.split('')
  const map: Record<string, string> = {'(': ')', '[' : ']', '{' : '}'}
  let stack = []
  
  for ( let i = 0; i < ar.length; i++ ) {
      if ( ar[i] in map) {
          stack.push(ar[i])
      } else if (map[stack[stack.length - 1]] == ar[i]) {
          stack.pop()
      } else {
          return false
      }
  }
  
  return !stack.length
}

test("valid parentheses", () => {
  expect(isValid("()")).toBe(true)
  expect(isValid("()[]{}")).toBe(true)
  expect(isValid("(]")).toBe(false)
  expect(isValid("([])")).toBe(true)
})