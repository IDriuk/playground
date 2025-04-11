/* 
  35. Search insert position
  Given a sorted array and a target value, return the index if the target is found.
  If not, return the index where it would be if it were inserted in order.

  You may assume no duplicates in the array.
*/

export function searchInsertPosition(ar: number[], target: number): number {
  let l = 0;
  let r = ar.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (ar[m] == target) {
      return m;
    } else if (ar[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return l;
}
