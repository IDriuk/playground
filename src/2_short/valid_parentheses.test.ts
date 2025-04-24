// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.
// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
// connect: stack, interesting

function validParentheses(s: string){
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

test("should validate parentheses", () => {
  expect(validParentheses( "(" )).toBe(false);
  expect(validParentheses( ")" )).toBe(false);
  expect(validParentheses( "" )).toBe(true);
  expect(validParentheses( "()" )).toBe(true);
  expect(validParentheses( "())" )).toBe(false);
})