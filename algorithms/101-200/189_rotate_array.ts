/*  
  189. Rotate Array
  Given an array, rotate the array to the right by k steps,
  where k is non-negative.
*/

export function rotateArray(nums: number[], k: number): number[] {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
