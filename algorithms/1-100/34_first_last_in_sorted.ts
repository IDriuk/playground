/* 
  34. Find first and last position of element in sorted array
  Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
  Your algorithm's runtime complexity must be in the order of O(log n).
  If the target is not found in the array, return [-1, -1].
*/

let getIndex = (ar: number[], target: number, isLeft: boolean): number => {
  let hi = ar.length;
  let lo = 0;

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (ar[mid] > target || (isLeft && ar[mid] == target)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

export function searchRange(ar: number[], target: number): number[] {
  let range = [-1, -1];

  let leftIndex = getIndex(ar, target, true);

  if (leftIndex == ar.length || ar[leftIndex] != target) {
    return range;
  }

  let rightIndex = getIndex(ar, target, false) - 1;

  return [leftIndex, rightIndex];
}
