/*
  287. Find the Duplicate Number
  Given an array nums containing n + 1 integers  where each integer is between 1 and n (inclusive),
  prove that at least one duplicate number must exist.
  Assume that there is only one duplicate number, find the duplicate one.
*/

export function findDuplicate(nums: number[]) {
  let t = nums[0];
  let h = nums[0];

  do {
    t = nums[t];
    h = nums[nums[h]];
  } while (t != h);

  let p1 = nums[0];
  let p2 = t;

  while (p1 != p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }

  return p1;
}
