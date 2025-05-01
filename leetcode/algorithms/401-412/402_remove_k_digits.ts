/*
  402. Remove K Digits
  Given a non-negative integer num represented as a string,
  remove k digits from the number so that the new number is the smallest possible.

  Note:
  The length of num is less than 10002 and will be >= k.
  The given num does not contain any leading zero.
*/

export function removeKdigits(num: string, k: number) {
  if (num.length == k) {
    return "0";
  }
  let stack: string[] = [];

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && +stack.at(-1)! > +num.charAt(i)) {
      stack.pop();
      k--;
    }
    stack.push(num.charAt(i));
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack[0] == "0") {
    stack.shift();
  }

  return stack.join("");
}
