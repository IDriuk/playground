/*
  330. Patching Array
  Given a sorted positive integer array nums and an integer n,  add / patch elements to the array 
  such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array.
  Return the minimum number of patches required.
*/

export function minPatches(nums: number[], n: number) {
  let patches = 0;
  let i = 0;
  let miss = 1;
  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i];
      i++;
    } else {
      miss += miss;
      patches++;
    }
  }
  return patches;
}
