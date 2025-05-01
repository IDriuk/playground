/* 
  282. Expression Add Operators
  Given a string that contains only digits 0-9 and a target value,
  return all possibilities to add binary operators (not unary) +, -, or * between the digits 
  so they evaluate to the target value.
*/

export function addOperators(nums: string, target: number) {
  if (nums.length == 0) {
    return [];
  }

  let answer: string[] = [];
  recurse(0, 0, [], 0);

  return answer;

  function recurse(
    index: number,
    value: number,
    ops: string[],
    previous: number,
  ) {
    let len = nums.length;
    if (index == len) {
      if (value == target) {
        answer.push(ops.join(""));
      }
      return;
    }

    let current = 0;

    for (let i = index; i < len; i++) {
      current = current * 10 + Number(nums.charAt(i));

      if (index == 0) {
        recurse(i + 1, current, [...ops, `${current}`], current);
      } else {
        recurse(
          i + 1,
          value - previous + previous * current,
          [...ops, "*", `${current}`],
          previous * current,
        );

        recurse(i + 1, value + current, [...ops, "+", `${current}`], current);
        recurse(i + 1, value - current, [...ops, "-", `${current}`], -current);
      }

      if (nums.charAt(index) == "0") {
        break;
      }
    }
  }
}
