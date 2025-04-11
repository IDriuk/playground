/* 
  31. Next Permutation
  Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
  If such arrangement is not possible, it must rearrange it as the lowest possible order ie, sorted in ascending order.
  The replacement must be in-place and use only constant extra memory.
  Here are some examples. Inputs are in the left-hand column, and its corresponding outputs are in the right-hand column.
*/

export function nextPermutation(nums: number[]): number[] {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j > i && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
  return nums;
}

function reverse(ar: number[], i: number) {
  let j = ar.length - 1;
  while (i <= j) {
    swap(ar, i, j);
    i++;
    j--;
  }
}

function swap(ar: number[], i: number, j: number) {
  let tmp = ar[i];
  ar[i] = ar[j];
  ar[j] = tmp;
}
