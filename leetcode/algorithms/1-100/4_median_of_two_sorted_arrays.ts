/*
  4. Median of two sorted arrays

  There are two sorted arrays nums1 and nums2 of size m and n, respectively.
  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m + n)).
  You may assume nums1 and nums2 cannot be both empty.
*/

export function medianOfTwoSortedArrays(
  a: Array<number>,
  b: Array<number>,
): number {
  if (a.length > b.length) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  let m = a.length;
  let n = b.length;
  let half = Math.floor((m + n + 1) / 2);
  let iMin = 0;
  let iMax = m;

  while (iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2);
    let j = half - i;
    if (i < iMax && b[j - 1] > a[i]) {
      iMin = i + 1;
    } else if (i > iMin && a[i - 1] > b[j]) {
      iMax = i - 1;
    } else {
      let left = 0;
      if (i == 0) {
        left = b[j - 1];
      } else if (j == 0) {
        left = a[i - 1];
      } else {
        left = Math.max(a[i - 1], b[j - 1]);
      }
      if ((m + n) % 2 == 1) {
        return left;
      }

      let right = 0;
      if (i == m) {
        right = b[j];
      } else if (j == n) {
        right = a[i];
      } else {
        right = Math.min(a[i], b[j]);
      }

      return (left + right) / 2;
    }
  }
  return 0;
}
