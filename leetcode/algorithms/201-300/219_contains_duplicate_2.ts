/*
  219. Contains Duplicate II
  Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array
  such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

export function containsDuplicate2(nums: number[], k: number) {
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
}
