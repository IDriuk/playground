/*
  150. Evaluate Reverse Polish Notation
  Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Valid operators are +, -, *, /. Each operand may be an integer or another expression.

  Note:
    Division between two integers should truncate toward zero.
    The given RPN expression is always valid. 
    That means  the expression would always evaluate to a result and there won't be any divide by zero operation. 
*/

export function evalRPN(tokens: string[]): number {
  if (tokens == null || tokens.length == 0) {
    return 0;
  }

  let s = new Array<number>();

  for (let i = 0; i < tokens.length; i++) {
    let n1, n2;
    switch (tokens[i]) {
      case "+":
        n2 = s.pop();
        n1 = s.pop();
        s.push(n1! + n2!);
        break;
      case "-":
        n2 = s.pop();
        n1 = s.pop();
        s.push(n1! - n2!);
        break;
      case "*":
        n2 = s.pop();
        n1 = s.pop();
        s.push(n1! * n2!);
        break;
      case "/":
        n2 = s.pop();
        n1 = s.pop();
        s.push(~~(n1! / n2!));
        break;
      default:
        s.push(+tokens[i]);
        break;
    }
  }

  return +s[s.length - 1] ?? 0;
}
