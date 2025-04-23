/*
  268. Missing Number
  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
  find the one that is missing from the array.
*/

export function missingNumber(nums: number[]) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = 0;
  for (let num of nums) {
    actualSum += num;
  }
  return expectedSum - actualSum;
}
