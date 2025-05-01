/* 
  20. Valid Parentheses
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  An input string is valid if:
  * Open brackets must be closed by the same type of brackets.
  * Open brackets must be closed in the correct order.
  
  Note that an empty string is also considered valid.
*/

export function validParentheses(s: string): boolean {
  let map: { [id: string]: string } = { ")": "(", "}": "{", "]": "[" };
  let a = s.split("");
  let stack: string[] = [];
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      let el = stack.pop();
      if (map[a[i]] != el) {
        return false;
      }
    } else {
      stack.push(a[i]);
    }
  }
  return !stack.length;
}
