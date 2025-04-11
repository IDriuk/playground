/*
  368. Largest Divisible Subset
  Given a set of distinct positive integers,
  find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:
  Si % Sj = 0 or Sj % Si = 0
  If there are multiple solutions, return any subset is fine.
*/

export function largestDivisibleSubset(nums: number[]) {
  if (nums == null) {
    throw new Error("Input array nums is null");
  }
  if (nums.length <= 1) {
    throw new Error("Input array must have at least 2 elements");
  }

  nums.sort();
  let parent = Array(nums.length).fill(0);
  let count = Array(nums.length).fill(0);
  let max = 0;
  let maxIndex = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] % nums[i] == 0 && count[i] < 1 + count[j]) {
        count[i] = 1 + count[j];
        parent[i] = j;

        if (count[i] > max) {
          max = count[i];
          maxIndex = i;
        }
      }
    }
  }

  let res: number[] = [];
  for (let i = 0; i < max; i++) {
    res.push(nums[maxIndex]);
    maxIndex = parent[maxIndex];
  }

  return res;
}
