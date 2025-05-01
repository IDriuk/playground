/*
  220. Contains Duplicate III
  Given an array of integers, find out whether there are two distinct indices i and j in the array
  such that the absolute difference between nums[i] and nums[j] is at most t 
  and the absolute difference between i and j is at most k.
*/

let getID = (x: number, w: number) => {
  return Math.floor(x < 0 ? (x + 1) / w - 1 : x / w);
};

export function containsDuplicate3(nums: number[], k: number, t: number) {
  if (t < 0) {
    return false;
  }
  let d = new Map<number, number>();
  let w = t + 1;
  for (let i = 0; i < nums.length; i++) {
    let m = getID(nums[i], w);
    if (d.has(m)) {
      return true;
    }
    if (d.has(m - 1) && Math.abs(nums[i] - d.get(m - 1)!) < w) {
      return true;
    }
    if (d.has(m + 1) && Math.abs(nums[i] - d.get(m + 1)!) < w) {
      return true;
    }
    d.set(m, nums[i]);
    if (i >= k) {
      d.delete(getID(nums[i - k], w));
    }
  }
  return false;
}
