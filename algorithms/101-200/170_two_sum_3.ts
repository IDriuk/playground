/*
  170. Two Sum III - Data structure design
  Design and implement a TwoSum class.
  It should support the following operations: add and find.
  add - Add the number to an internal data structure.
  find - Find if there exists any pair of numbers which sum is equal to the value.
*/

export class TwoSum3 {
  nums: number[] = [];
  count: Map<number, number> = new Map();

  add = (number: number) => {
    let { nums, count } = this;
    if (!count.has(number)) {
      count.set(number, 0);
      nums.push(number);
    }
    count.set(number, count.get(number)! + 1);
  };

  find = (value: number): boolean => {
    let { nums, count } = this;
    for (let num1 of nums) {
      let num2 = value - num1;
      if (!count.has(num2)) {
        continue;
      }
      if (num1 != num2 && count.get(num2)! > 0) {
        return true;
      }
      if (num1 == num2 && count.get(num2)! >= 2) {
        return true;
      }
    }
    return false;
  };
}
