/*
  303. Range Sum Query - Immutable
  Given an integer array nums, find the sum of the elements between indices i and j (i <= j), inclusive.
*/

export function rangeSumQuery(nums: number[]) {
  let sum = new Array<number>(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  return (i: number, j: number) => sum[j + 1] - sum[i];
}
