/* 
  33. Search in Rotated Sorted Array

  Suppose an array sorted in ascending order is rated at some pivot unknown to you beforehand.
  
  (i.e., [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2]).

  You are given a target value to search. If found in the array return its index, otherwise return -1.

  You may assume no duplicate exists in the array.

  Your algorithm's runtime complexity must be in the order of O(log n).
*/

export function searchRotatedArray(ar: number[], target: number): number {
  let lo = 0;
  let hi = ar.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (ar[mid] == target) {
      return mid;
    }

    if (ar[lo] < ar[mid]) {
      if (target >= ar[lo] && target < ar[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    if (ar[mid] < ar[hi]) {
      if (target > ar[mid] && target <= ar[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
}
