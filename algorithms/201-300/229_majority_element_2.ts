/*
  229. Majority Element 2
  Given an integer array of size n, find all elements that appear more than n / 3 times.
  Note: 
  The algorithm should run in linear time and in O(1) space.
*/

export function majorityElement2(nums: number[]) {
  if (nums == null || nums.length == 0) {
    return [];
  }

  let num1 = 0;
  let count1 = 0;
  let num2 = 0;
  let count2 = 0;
  let res = [];

  for (let n of nums) {
    if (n == num1) {
      count1++;
    } else if (n == num2) {
      count2++;
    } else if (count1 == 0) {
      num1 = n;
      count1 = 1;
    } else if (count2 == 0) {
      num2 = n;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;
  for (let n of nums) {
    if (n == num1) {
      count1++;
    } else if (n == num2) {
      count2++;
    }
  }

  if (count1 > nums.length / 3) {
    res.push(num1);
  }

  if (count2 > nums.length / 3) {
    res.push(num2);
  }

  return res;
}
