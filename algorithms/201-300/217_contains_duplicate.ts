/*
  217. Contains Duplicate
  Given an array of integers , find if the array contains any duplicates.
  Your function should return true if any value appears at least twice in the array,
  and it should return false if every element is distinct.
*/

export function containsDuplicate(nums: number[]) {
  let set = new Set<number>();
  for (let x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
}
