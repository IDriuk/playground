/*
  306. Additive Number
  Additive number is a string whose digits can form additive sequence.
  
  A valid additive sequence should contain at least three numbers.
  Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

  Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

  Note: Numbers in the additive  sequence cannot have leading zeros, so sequence 1,2, 03 or 1, 02, 3 is invalid.
*/

export function additiveNumber(num: string) {
  let n = num.length;
  for (let i = 1; i <= n / 2; i++) {
    if (num.charAt(0) == "0" && i > 1) {
      return false;
    }
    let num1 = +num.substring(0, i);
    for (let j = 1; Math.max(i, j) <= n - i - j; j++) {
      if (num.charAt(i) == "0" && j > 1) {
        break;
      }
      let num2 = +num.substring(i, i + j);
      if (isAdditive(num1, num2, i + j, num)) {
        return true;
      }
    }
  }
  return false;
}

function isAdditive(
  num1: number,
  num2: number,
  start: number,
  num: string,
): boolean {
  if (start == num.length) {
    return true;
  }

  num2 = num2 + num1;
  num1 = num2 - num1;
  let sum = `${num2}`;
  return (
    num.startsWith(sum, start) &&
    isAdditive(num1, num2, start + sum.length, num)
  );
}
