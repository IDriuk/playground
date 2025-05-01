/*
  350. Intersection of Two Arrays 2.
  Given two arrays, write a function to compute their intersection.
  Note:
  Each element in the result should appear as many times as it shows in both arrays.
  The result can be in any order.
  Follow up:
  What if the given array is already sorted? How would you optimize your algorithm?
  What if nums1's size is small compared to nums2's size? Which algorithm is better?
  What if  elements of nums2 are sorted on disk, 
  and the memory is limited such that you cannot load all elements into the memory at once?
*/

export function intersectionOfTwoArrays2(nums1: number[], nums2: number[]) {
  if (nums1.length > nums2.length) {
    return intersectionOfTwoArrays2(nums2, nums1);
  }
  let map = new Map<number, number>();
  for (let n of nums1) {
    let count = map.get(n) ?? 0;
    map.set(n, count + 1);
  }

  let intersection: number[] = [];
  for (let n of nums2) {
    let count = map.get(n) ?? 0;
    if (count) {
      intersection.push(n);
      map.set(n, count - 1);
    }
  }
  return intersection;
}
