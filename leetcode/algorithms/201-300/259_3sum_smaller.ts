/*
  259. 3Sum Smaller
  Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n
  that satisfy the condition nums[i] + nums[j] + nums[k] < target
*/

export function threeSumSmaller(nums: number[], target: number) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    sum += twoSumSmaller(nums, i + 1, target - nums[i]);
  }
  return sum;
}

function twoSumSmaller(nums: number[], startIndex: number, target: number) {
  let sum = 0;
  let left = startIndex;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      sum += right - left;
      left++;
    } else {
      right--;
    }
  }

  return sum;
}
