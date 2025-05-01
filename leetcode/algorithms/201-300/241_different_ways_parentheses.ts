/*
  241. Different Ways to Add Parentheses
  Given a string of numbers and operators,
  return all possible results from computing all the different possible ways to group numbers and operators.
  The valid operators are +, - and *.
*/

export function diffWaysToCompute(input: string): number[] {
  let res: number[] = [];
  for (let i = 0; i < input.length; i++) {
    let c = input.charAt(i);
    if (c == "*" || c == "-" || c == "+") {
      let left = diffWaysToCompute(input.substring(0, i));
      let right = diffWaysToCompute(input.substring(i + 1, input.length));
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          res.push(calculate(c, left[j], right[k]));
        }
      }
    }
  }
  if (res.length == 0) {
    res.push(parseInt(input));
  }

  return res;
}

function calculate(op: string, a: number, b: number) {
  return op == "*" ? a * b : op == "+" ? a + b : a - b;
}
