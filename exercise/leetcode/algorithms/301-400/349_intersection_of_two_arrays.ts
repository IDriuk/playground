/*
  349. Intersection of Two Arrays.
  Given two arrays, write a function to compute their intersection.
  Note:
  Each element in the result must be unique.
  The result can be in any order.
*/

export function intersectionOfTwoArrays(nums1: number[], nums2: number[]) {
  if (nums1.length > nums2.length) {
    return intersectionOfTwoArrays(nums2, nums1);
  }
  let set = new Set<number>();
  for (let n of nums1) {
    set.add(n);
  }
  let intersect = new Set<number>();
  for (let n of nums2) {
    if (set.has(n)) {
      intersect.add(n);
    }
  }
  return Array.from(intersect);
}
