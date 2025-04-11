// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(s){
  if (!s || s == "") return true
  let ar = s.split('')
  const map = {'(': ')', '[' : ']', '{' : '}'}
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